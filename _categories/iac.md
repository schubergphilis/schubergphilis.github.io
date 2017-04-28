---
title: Infrastructure as Code
caption: Our contributions to Infra structure as code
---
<div class="inner">
  <header>
    <h1><!--[-->Schuberg Philis Open Source<!--]--><br />
    <!--[--><!--]--></h1>
    <p>Welcome to the open source site of Schuberg Philis. We love to share, on this site you can find the references to our work.</p>
  </header>
  <section class="tiles">

  {% assign items = (site.data.projects | where: "category" , "iac") %}
  {% for item in items %}
    <article class="style1">
      <span class="image">
        <img src="images/pic01.jpg" alt="" />
      </span>
      <a href="{{ item.href }}">
        <h2>{{ item.name }}</h2>
        <div class="content">
          <p>{{ item.description }}</p>
      </a>
        </div>
      </a>
    </article>
  {% endfor %}
  </section>
</div>
