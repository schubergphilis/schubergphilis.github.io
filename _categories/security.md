---
title: Security
caption: >
  Our security projects.
layout: page
image: /images/pic04.jpg
order: 3
---
<section class="tiles">

If you want to read more about what we are doing see the security section
in our <a href="https://cupfighter.net/category/security">blog</a>.
</section>

<section class="tiles">
{% assign items = (site.projects | where: "category" , "security") %}
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
