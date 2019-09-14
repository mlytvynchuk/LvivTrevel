import requests
from bs4 import BeautifulSoup as bs

base_url = 'https://afisha.lviv.ua/events'

def get_count_pages(url):
  response = requests.get(url)
  soup = bs(response.content, "html.parser")

  pages = []

  for li in soup.findAll("ul", class_="pagination"):
    for a in li.findAll("li"):
      try:
        pages.append(int(a.text))
      except ValueError:
        pass

  print(pages)
  return len(pages)

def parse_links(url):
  response = requests.get(url)
  soup = bs(response.content, "html.parser")

  events = []

  for i in range(1, 11):
    # get row with article
    if i == 1:
      for article_div in soup.findAll("div", class_="row views-row row-1 row-first"):
        # first col
        article_div = article_div.find('div', "col-xs-12 col-sm-4 col-md-4 views-col col-1 col-first")
        # get row in previous class
        article_div = article_div.find("div", "row")
        article = article_div.find("article")
        article = article.find("div", "views-field-logo col-xs-12")
        # get content
        field_content = article.find("div", "field-content")
        # get link to event
        link = 'https://afisha.lviv.ua' + field_content.find('a', href=True)['href']
        events.append(link)
    elif i == 10:
      for article_div in soup.findAll("div", class_="row views-row row-10 row-last"):
        # first col
        article_div = article_div.find('div', "col-xs-12 col-sm-4 col-md-4 views-col col-1 col-first")
        # get row in previous class
        article_div = article_div.find("div", "row")
        article = article_div.find("article")
        article = article.find("div", "views-field-logo col-xs-12")
        # get content
        field_content = article.find("div", "field-content")
        # get link to event
        link = 'https://afisha.lviv.ua' + field_content.find('a', href=True)['href']
        events.append(link)
    else:
      class_name_article = 'row views-row row-' + str(i)
      for article_div in soup.findAll("div", class_=class_name_article):
        # first col
        article_div = article_div.find('div', "col-xs-12 col-sm-4 col-md-4 views-col col-1 col-first")
        # get row in previous class
        article_div = article_div.find("div", "row")
        article = article_div.find("article")
        article = article.find("div", "views-field-logo col-xs-12")
        # get content
        field_content = article.find("div", "field-content")

        # set link to event
        link = 'https://afisha.lviv.ua' + field_content.find('a', href=True)['href']
        events.append(link)

  return events

def get_name(soup):

  return {'name': soup.find('h1', itemprop='name').text}

def get_address(soup):
  address = soup.find('div', itemprop='address').text

  return {'address': address}

def get_date_and_time(soup):

  date = soup.find('time', itemprop='startDate')['datetime']

  try:
    time = soup.find('div', 'icon-bg hours').text
  except AttributeError:
    time = ''

  date_and_time = date + " " + time
  return {'date': date_and_time}

def get_description(soup):
  description = soup.find('div', itemprop='description').text
  return {'description': description}

def get_price(soup):
  price = soup.find('div', 'icon-bg price')
  return {'price': price.text}

def get_category(soup):
  category = soup.find('div', 'field-type margin-bottom-xs text-uppercase')
  category = category.find('a').text
  return {"category": category}

def get_photo_url(soup):
  return {'image': soup.find('img', itemprop='image')['src']}

def full_parser(url):
  count_page = get_count_pages(url)

  events = []


  for i in range(count_page):
    event = {}
    if i > 0:
      url = url+'?page='+str(i)

    for link in parse_links(url):
      response = requests.get(link)
      soup = bs(response.content, "html.parser")
      print("Link:", link)
      event['name'] = get_name(soup)['name']
      event['image'] = get_photo_url(soup)['image']
      event['category'] = get_category(soup)['category']
      event['date'] = get_date_and_time(soup)['date']
      event['address'] = get_address(soup)['address']
      try:
        event['price'] = get_price(soup)['price']
      except AttributeError:
        event['price'] = "Havem't information"
      event['description'] = get_description(soup)['description']

      events.append(event)

  return events

print(full_parser(base_url))
