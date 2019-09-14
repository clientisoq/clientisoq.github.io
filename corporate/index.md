---
layout: default
---

<!-- <div class="loading">
    <img src="/assets/other/loading.gif" alt="">
</div> -->

<section id="gallery" class="wall">
    {% for image in site.static_files %}
        {% if image.path contains 'img' %}
            {% increment imgCounter %}
            <a href="#item-{{ imgCounter }}" class="wall-item"><img src="{{ site.baseurl }}{{ image.path }}" alt=""></a>
        {% endif %}
    {% endfor %} 
</section>

<div class="lightboxes">
        {% for image in site.static_files %}
            {% if image.path contains 'img' %}
                {% increment lightboxbCounter %}
                <div id="item-{{ lightboxbCounter }}" class="lightbox">
                    <a href="#gallery" class="close"><i class="fas fa-times"></i></a>
                    <div class="lightbox-content">
                        <img class="lb-img" src="{{ site.baseurl }}{{ image.path }}" alt="">
                    </div>
                 </div>
            {% endif %}
        {% endfor %}
</div>