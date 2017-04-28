---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
title: Schuberg Philis Open Source
caption: >
  <a href="https://schubergphilis.com/">Schuberg Philis</a> uses supports and
  contributes to open source. We love to share. On this site you can find many
  references to our work. If you want to read more, see our
  <a href="https://cupfighter.net">blog</a>.
layout: page

---

We contribute in the following area's:

<section class="tiles">
{% assign items = (site.categories | sort: "order") %}
{% for item in items %}
    <article class="style1">
      <span class="image">
      <img src="{{ item.image }}" alt="" />
      </span>
      <a href="{{ item.url }}">
        <h2>{{ item.title }}</h2>
        <div class="content">
          <p>{{ item.caption }}</p>
        </div>
      </a>
    </article>
  {% endfor %}
</section>

<br/>
<h3>Projects</h3>
Some of the project we are proud of:
<section class="tiles">
{% assign items = (site.projects | where: "category" , "proud") %}
{% for item in items %}
  <article class="style1">
    <span class="image">
      <img src="{{ item.image }}" alt="" />
    </span>
    <a href="{{ item.href }}">
      <h2>{{ item.name }}</h2>
      <div class="content">
        <p>{{ item.description }}</p>
      </div>
    </a>
  </article>
{% endfor %}
</section>
