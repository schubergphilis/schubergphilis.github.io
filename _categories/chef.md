---
title: Chef, cookbooks and more
caption: We are Chefs, these are our extensions and cookbooks
layout: page
image: /images/pic02.jpg
---
<h3>Main projects</h3>
<section class="tiles">

  {% assign items = (site.projects | where: "category" , "chef") %}
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

<h3>Cookbooks</h3>

You can find our cookbooks on&nbsp;
<a href="https://github.com/sbp-cookbooks">github/sbp-cookbooks</a>.
Also we have claimed the 'sbp_' prefix on&nbsp;
<a href="https://supermarket.chef.io/cookbooks?utf8=%E2%9C%93&q=sbp_&platforms%5B%5D="> supermarket.chef.io</a>

<section class="tiles">

  <div class="table-wrapper">
		<table>
			<thead>
				<tr>
					<th>Name</th>
					<th>Description</th>
				</tr>
			</thead>
      <tbody>

  {% for item in site.cookbooks %}
		<tr>
			<td>
        <a href="{{ item.repo }}">
        <h2>{{ item.name }}</h2></a>
      </td>
			<td>
        <div class="content">
          <p>{{ item.description }}</p>
        </div>
      </td>
		</tr>
    {% endfor %}
    </tbody>
    </table>
  </div>
</section>
