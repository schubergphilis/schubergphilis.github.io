---
title: Operations
caption: >
  Our operational support projects.
layout: page
image: /images/pic04.jpg

---
<section class="tiles">
These are some of our operational support tools and projects.
</section>

<section class="tiles">
{% assign items = (site.projects | where: "category" , "ops") %}
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
