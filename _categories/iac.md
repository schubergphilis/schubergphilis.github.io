---
title: Infrastructure as Code
caption: >
  Our work on infrastructure.
layout: page
image: /images/sheep03.png
order: 1

---
  <section class="tiles">
  {% assign items = (site.projects | where: "category" , "iac") %}
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


  <h3>Our contributions for Kubernetes</h3>
  <section class="tiles">
  {% assign items = (site.projects | where: "category" , "k8s") %}
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
