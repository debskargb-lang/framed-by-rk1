async function loadContent(){
 const res = await fetch('content.json');
 const data = await res.json();
 document.documentElement.style.setProperty('--navy', data.brand.navy);
 document.documentElement.style.setProperty('--gold', data.brand.gold);
 document.documentElement.style.setProperty('--ivory', data.brand.ivory);
 const order = data.brand.orderLink;
 ['navOrder','heroOrder','ctaOrder'].forEach(id=>document.getElementById(id).href=order);
 heroEyebrow.textContent=data.hero.eyebrow;
 heroHeadline.textContent=data.hero.headline;
 heroSub.textContent=data.hero.subheading;
 heroOrder.textContent=data.hero.primaryButton;
 heroSecondary.textContent=data.hero.secondaryButton;
 introScript.textContent=data.intro.script;
 introBody.textContent=data.intro.body;
 footerText.textContent=`© ${new Date().getFullYear()} ${data.brand.name}. ${data.brand.tagline}.`;
 galleryGrid.innerHTML=data.gallery.map(item=>`<div class="gallery-item" onclick="openLightbox('${item.image}')"><img src="${item.image}" alt="${item.title}"><h3>${item.title}</h3><p>${item.category}</p></div>`).join('');
 productGrid.innerHTML=data.products.map(p=>`<article class="product"><img src="${p.image}" alt="${p.name}"><div><p class="price">${p.price}</p><h3>${p.name}</h3><p>${p.description}</p><a class="btn" href="${order}" target="_blank">Order</a></div></article>`).join('');
 testimonials.innerHTML=data.testimonials.map(t=>`<div class="testimonial"><p>“${t.quote}”</p><strong>${t.name}</strong></div>`).join('');
 faqList.innerHTML=data.faqs.map(f=>`<details class="faq-item"><summary>${f.question}</summary><p>${f.answer}</p></details>`).join('');
}
function openLightbox(src){ lightboxImg.src=src; lightbox.classList.add('show'); }
loadContent();