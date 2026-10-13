---
layout: portfolio
title: Products
meta_title: "AI & Software Portfolio | Eltayeb Mohammed"
description: "Explore SpinFund, ArchiCraft, and Eltayeb Mohammed’s AI and software projects, including GhostNet’s MIT-licensed source and verified public repositories."
permalink: /apps/
page_id: products
---

<section class="page-intro">
  <div class="container">
    <p class="eyebrow">Portfolio / AI, fintech &amp; web applications</p>
    <h1>Useful ideas.<br>Working applications.</h1>
    <p class="lead">A selection of products and experiments I build and develop, spanning bilingual career tools, cash-flow planning, voice AI, generative design, and real-time communication.</p>
    <p class="product-intro-note">Each project shows its current development stage. Live products, sandbox integrations, and prototypes have different levels of readiness.</p>
  </div>
</section>

<section class="content-section">
  <div class="container">
    <div class="products-toolbar">
      <div class="product-filters" role="group" aria-label="Filter projects by focus" hidden>
        <button class="filter-button" type="button" data-filter="all" aria-pressed="true">All projects</button>
        <button class="filter-button" type="button" data-filter="ai" aria-pressed="false">AI products</button>
        <button class="filter-button" type="button" data-filter="fintech" aria-pressed="false">Fintech</button>
        <button class="filter-button" type="button" data-filter="learning" aria-pressed="false">Learning</button>
        <button class="filter-button" type="button" data-filter="realtime" aria-pressed="false">Real-time</button>
      </div>
      <p id="filter-status" class="filter-status" role="status" aria-live="polite">{{ site.data.products | size }} projects shown</p>
    </div>
    <div class="product-grid">
      {% for product in site.data.products %}
      {% if product.featured %}
      {% include product-card.html %}
      {% endif %}
      {% endfor %}
      {% for product in site.data.products %}
      {% unless product.featured %}
      {% include product-card.html %}
      {% endunless %}
      {% endfor %}
    </div>
  </div>
</section>

<section class="section approach-section">
  <div class="container contact-band">
    <div><p class="eyebrow">Behind the products</p><h2>AI-assisted development.<br>Engineering-led decisions.</h2><p>I define the product requirements, guide implementation, review AI-generated work, and validate critical workflows as the products evolve.</p></div>
    <a class="button" href="{{ '/about/' | relative_url }}">My approach <span aria-hidden="true">↗</span></a>
  </div>
</section>
