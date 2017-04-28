---
title: Security
caption: Our security projects
---
<div class="inner">
  <header>
    <h1><!--[-->Schuberg Philis Open Source<!--]--><br />
    <!--[--><!--]--></h1>
    <p>Welcome to the open source site of Schuberg Philis. We love to share, on this site you can find the references to our work.</p>
  </header>
  <section class="tiles">

  {% assign items = (site.data.projects | where: "category" , "security") %}
  {% for item in items %}
    <article class="style1">
      <span class="image">
        <img src="images/pic01.jpg" alt="" />
      </span>

        <h2>{{ item.name }}</h2>
        <div class="content">
          <a href="{{ item.href }}">
          <p>{{ item.description }}</p>      </a>

          {% for author in item.author %}
              <a href="http://twitter.com/{{ site.data.people[author].twitter_handle }}">{{ site.data.people[author].name }}</a>
          {% endfor %}
        </div>
    </article>
  {% endfor %}
  </section>
</div>
