import requests
from bs4 import BeautifulSoup as bs

base_url = 'https://afisha.lviv.ua/events'

additional_url = ''

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

def parse_link_name_image(url):
  response = requests.get(url)
  soup = bs(response.content, "html.parser")

  events = []

  for i in range(1, 11):
    # create object of event
    event = {}

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
        event['link'] = link

        # second col
        article = article_div.find("article")

        info = article.findAll("div", "view-filters-info col-xs-12")
        info_rows = info[0].findAll("div", "row")

        # set name
        name = info_rows[1].find('div', 'views-field views-field-title h4 col-xs-12')
        name = name.find('span', 'field-content')
        name = name.find('span').text
        event['name'] = name

        # set category
        category = info_rows[0].find()
        category = category.find('div', 'field-content')
        event['category'] = category.text
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
        event['link'] = link

        # second col
        article = article_div.find("article")

        info = article.findAll("div", "view-filters-info col-xs-12")
        info_rows = info[0].findAll("div", "row")

        # set name
        name = info_rows[1].find('div', 'views-field views-field-title h4 col-xs-12')
        name = name.find('span', 'field-content')
        name = name.find('span').text
        event['name'] = name

        # set category
        category = info_rows[0].find()
        category = category.find('div', 'field-content')
        event['category'] = category.text
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
        event['link'] = link

        # set link to event's image
        a = field_content.find('a', href=True)
        img = a.find('img')['src']

        event['image'] = img

        # second col
        article = article_div.find("article")

        info = article.findAll("div", "view-filters-info col-xs-12")
        info_rows = info[0].findAll("div", "row")

        # set name
        name = info_rows[1].find('div', 'views-field views-field-title h4 col-xs-12')
        name = name.find('span', 'field-content')
        name = name.find('span').text
        event['name'] = name

        # set category
        category = info_rows[0].find()
        category = category.find('div', 'field-content')
        event['category'] = category.text

    events.append(event)

  return events

def get_address(url):
  response = requests.get(url)
  soup = bs(response.content, "html.parser")

  event_url = 'https://afisha.lviv.ua/events/cyber-girls-party-0'
  response = requests.get(event_url)
  soup = bs(response.content, "html.parser")

  info = soup.find('div', 'margin-bottom-md brief-info col-xs-12 col-sm-7 col-lg-7')
  # print(info)
  address = info.find_all('div', 'text-strong row')[1]

  address = address.find('div', 'col-xs-12 col-sm-7 col-md-8 col-lg-8')
  address = address.find('div', 'icon-bg address')
  address = address.find_all('meta')

  location = ''

  for i in range(len(address)):
    location += ' ' + address[i]['content']

  return {'address': location}

def get_date_and_time(event_url):
  response = requests.get(event_url)
  soup = bs(response.content, "html.parser")

  event_url = 'https://afisha.lviv.ua/events/cyber-girls-party-0'
  response = requests.get(event_url)
  soup = bs(response.content, "html.parser")

  info = soup.find('div', 'margin-bottom-md brief-info col-xs-12 col-sm-7 col-lg-7')
  # print(info)
  date = info.find_all('div', 'text-strong row')[3]
  date = date.find('div', 'col-xs-12 col-sm-7 col-md-8 col-lg-8')
  date = date.find('div', 'icon-bg date')
  date = date.find('time')['datetime']

  time = info.find_all('div', 'text-strong row')[4]
  time = time.find('div', 'col-xs-12 col-sm-7 col-md-8 col-lg-8')
  time = time.find('div', 'icon-bg hours').time

  date_and_time = date + " " + time
  return {'date': date_and_time}

def get_description(event_url):
  response = requests.get(event_url)
  soup = bs(response.content, "html.parser")
  description = soup.find('div', itemprop='description').text
  return {'description': description}
