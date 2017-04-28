---
title: Chef
caption: Our contributions to Infra structure as code
---
<div class="inner">
  <header>
    <h1><!--[-->Chef, cookbooks and more<!--]--><br />
    <!--[--><!--]--></h1>
    <p>Add Schuberg Philis we are chefs</p>
  </header>
  <section class="tiles">

  {% assign items = (site.data.projects | where: "category" , "chef") %}
  {% for item in items %}
    <article class="style1">
      <span class="image">
        <img src="images/pic01.jpg" alt="" />
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
</div>
