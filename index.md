---
layout: portfolio
title: Eltayeb Mohammed
meta_title: "Eltayeb Mohammed | Mechanical Engineering & AI Products"
description: "Chicago-based Senior Mechanical Engineer and Project Manager. 18+ years in infrastructure, now also building practical AI products and fintech tools."
permalink: /
page_id: home
---

<section class="hero">
  <div class="container hero-grid">
    <div>
      <p class="location-line"><span class="location-dot" aria-hidden="true"></span>Chicago, Illinois · Eltayeb Mohammed</p>
      <h1>Engineering rigor.<br><em>Practical AI products.</em></h1>
      <p class="hero-role">Senior Mechanical Engineer &amp; Project Manager</p>
      <p class="hero-summary">I bring 18+ years of infrastructure experience to complex engineering challenges—and the same discipline to building useful software. My work connects mechanical systems, project leadership, and hands-on AI product development.</p>
      <div class="hero-actions">
        <a class="button" href="{{ '/projects/' | relative_url }}">Engineering experience <span aria-hidden="true">↗</span></a>
        <a class="button button-outline" href="{{ '/apps/' | relative_url }}">Explore products <span aria-hidden="true">↗</span></a>
      </div>
    </div>
    <div class="portrait-panel">
      <img class="portrait-photo" src="{{ '/assets/images/avatar.png' | relative_url }}" alt="Eltayeb Mohammed" width="460" height="460" fetchpriority="high">
      <div class="portrait-caption"><div><strong>Engineer. Project leader. Builder.</strong><span>Infrastructure &amp; digital products</span></div><span class="caption-number" aria-hidden="true">EM.</span></div>
    </div>
  </div>
</section>

<div class="container credentials" aria-label="Professional background">
  <div class="credential"><strong>18+ years</strong><span>Engineering &amp; infrastructure experience</span></div>
  <div class="credential"><strong>Metra</strong><span>Mechanical engineering &amp; capital delivery</span></div>
  <div class="credential"><strong>AI + software</strong><span>Hands-on product design &amp; development</span></div>
</div>

<section class="section">
  <div class="container engineering-overview">
    <div>
      <p class="eyebrow">01 / Engineering foundation</p>
      <h2>Complex systems.<br>Clear decisions.</h2>
      <p class="intro">As a Senior Mechanical Engineer and Project Manager at Metra, I support facility and infrastructure projects where safety, reliability, and coordination matter every day.</p>
      <p class="intro">My approach starts with the requirements, follows the dependencies, and considers how a system will be built, operated, and maintained.</p>
      <a class="text-link" href="{{ '/projects/' | relative_url }}">Explore my engineering work <span aria-hidden="true">↗</span></a>
    </div>
    <ul class="expertise-list">
      <li><span class="row-number" aria-hidden="true">01</span><div><h3>Mechanical systems &amp; HVAC/MEP</h3><p>Design review, multidisciplinary coordination, and practical attention to facility performance.</p></div></li>
      <li><span class="row-number" aria-hidden="true">02</span><div><h3>Capital project delivery</h3><p>Connecting scope, schedule, technical requirements, and stakeholder decisions.</p></div></li>
      <li><span class="row-number" aria-hidden="true">03</span><div><h3>Reliability &amp; lifecycle thinking</h3><p>Evaluating constructability, maintainability, and operational requirements alongside design intent.</p></div></li>
    </ul>
  </div>
</section>

<section class="section section-rule">
  <div class="container">
    <div class="section-heading">
      <div><p class="eyebrow">02 / Selected products</p><h2>From a problem to a product.</h2></div>
      <p>Software I build and develop around clear user needs—from bilingual career tools to cash-flow planning.</p>
    </div>
    <div class="product-feature-grid">
      {% for product in site.data.products %}
      {% if product.featured %}
      <article class="product-feature product-{{ product.theme }}">
        <div class="product-visual">
          <span class="product-wordmark">{{ product.name }}</span>
          <p class="visual-subtitle">{{ product.category }}</p>
        </div>
        <div class="product-feature-body">
          <p class="eyebrow">{{ product.role }}</p>
          <h3>{{ product.headline }}</h3>
          <p>{{ product.summary }}</p>
          <div class="feature-meta"><span class="stage">{{ product.stage }}</span></div>
          <ul class="tags" aria-label="{{ product.name }} technologies">{% for technology in product.stack %}<li>{{ technology }}</li>{% endfor %}</ul>
          <div class="product-links">
            <a class="text-link" href="{{ product.url }}" target="_blank" rel="noopener noreferrer" aria-label="Visit {{ product.name }} website">Visit {{ product.name }} <span aria-hidden="true">↗</span></a>
            <a class="text-link secondary-link" href="{{ '/apps/' | relative_url }}#{{ product.id }}" aria-label="Read about {{ product.name }}">Project details <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </article>
      {% endif %}
      {% endfor %}
    </div>
    <div class="selected-list" aria-label="More selected projects">
      {% for product in site.data.products %}
      {% if product.id == 'timedial' or product.id == 'realestateos' or product.id == 'archicraft' or product.id == 'ghostnet' %}
      <a class="selected-item product-{{ product.theme }}" href="{{ '/apps/' | relative_url }}#{{ product.id }}">
        <span class="product-mark" aria-hidden="true">{{ product.initials }}</span>
        <div><h3>{{ product.name }}</h3><p>{{ product.category }}</p></div>
        <span class="item-arrow" aria-hidden="true">↗</span>
      </a>
      {% endif %}
      {% endfor %}
    </div>
    <a class="text-link" href="{{ '/apps/' | relative_url }}" style="margin-top: 22px;">Explore the full product portfolio <span aria-hidden="true">↗</span></a>
  </div>
</section>

<section class="section approach-section">
  <div class="container approach-grid">
    <div>
      <p class="eyebrow">03 / How I build</p>
      <h2>AI accelerates the work.<br>Judgment guides it.</h2>
      <p class="lead">I use AI tools to support development, explore options, and iterate faster. I stay responsible for the requirements, implementation review, and validation.</p>
      <a class="text-link" href="{{ '/about/' | relative_url }}">More about my approach <span aria-hidden="true">↗</span></a>
    </div>
    <ol class="approach-steps">
      <li><span class="step-number" aria-hidden="true">01</span><div><h3>Define the real problem</h3><p>Understand the user, operating constraints, and success criteria before choosing the solution.</p></div></li>
      <li><span class="step-number" aria-hidden="true">02</span><div><h3>Build with clear boundaries</h3><p>Turn requirements into focused workflows, deliberate integrations, and maintainable components.</p></div></li>
      <li><span class="step-number" aria-hidden="true">03</span><div><h3>Validate, then improve</h3><p>Check critical user journeys, review AI output, and use feedback to guide the next iteration.</p></div></li>
    </ol>
  </div>
</section>

<section class="section">
  <div class="container contact-band">
    <div><p class="eyebrow">Start a conversation</p><h2>Let’s work on a worthwhile problem.</h2><p>Engineering opportunities, technical collaboration, or practical applications of AI.</p></div>
    <a class="button" href="{{ '/contact/' | relative_url }}">Get in touch <span aria-hidden="true">↗</span></a>
  </div>
</section>
