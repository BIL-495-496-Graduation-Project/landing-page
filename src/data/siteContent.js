export const siteConfig = {
  projectName: 'LazarusFinance',
  subtitle: 'Yapay Zeka Destekli Finansal Haber Etki Analiz ve Karar Destek Sistemi',
  summary:
    'Ekonomik, finansal ve siyasi haberlerin BIST100, Borsa İstanbul sektör endeksleri ve USD/TRY kuru üzerindeki kısa vadeli etkilerini analiz eden yapay zeka destekli web tabanlı karar destek sistemi.',
  teamEmail: 'lazarusfinance.team@gmail.com',
  githubUrl: 'https://github.com/lazarusfinance/lazarusfinance.github.io',
  demoVideoUrl: '',
  demoPreviews: [
    {
      title: 'Dashboard',
      caption: 'Genel piyasa özeti, haber duyarlılığı ve temel göstergeler.',
      type: 'html',
      src: '/demo/dashboard.html',
    },
    {
      title: 'Haber Akışı',
      caption: 'KAP, finans ve ekonomi haberlerinin güncel akışı ve filtreleme.',
      type: 'html',
      src: '/demo/news-feed.html',
    },
    {
      title: 'Haber Detay',
      caption: 'Seçilen haberin sınıflandırma, duygu analizi ve etki skoru sonuçları.',
      type: 'html',
      src: '/demo/news-detail.html',
    },
    {
      title: 'Olay Penceresi Analizi',
      caption: 'Haber yayın zamanı etrafındaki kısa vadeli piyasa hareketlerinin incelenmesi.',
      type: 'html',
      src: '/demo/event-window-analysis.html',
    },
    {
      title: 'Karşılaştırmalı Göstergeler',
      caption: 'Altın ile karşılaştırmalı gösterge görünümü; haber yayın zamanı ve piyasa etkisi analizi.',
      type: 'html',
      src: '/demo/karsilastirmali-gostergeler.html',
    },
  ],
  advisor: {
    name: 'Prof. Dr. Ahmet Murat Özbayoğlu',
    title: 'Proje Danışmanı',
    department: 'Yapay Zeka Mühendisliği Bölümü · TOBB ETÜ',
    email: 'mozbayoglu@etu.edu.tr',
  },
  problem:
    'Finansal piyasalarda haber akışı hızlı ve hacimlidir; KAP bildirimleri, ekonomik gelişmeler ve siyasi olaylar BIST100, Borsa İstanbul sektör endeksleri ile USD/TRY kuru üzerinde kısa vadede etki yaratabilir. Yatırımcılar ve araştırmacılar bu ilişkileri manuel takip etmekte, haber kaynaklı piyasa hareketlerini zamanında yorumlamakta zorlanmaktadır.',
  solution:
    'LazarusFinance; KAP, finans ve ekonomi haberlerini çeşitli kaynaklardan toplar, FinBERT ve BERT tabanlı modellerle sınıflandırır ve duygu analizi yaparak etki skoru üretir. Haber verilerini Yahoo Finance, KAP ve diğer kaynaklardan elde edilen BIST100, Borsa İstanbul sektör endeksleri, USD/TRY ve altın fiyatlarıyla ilişkilendirerek korelasyon, zaman serisi analizi ve etkileşimli görselleştirmelerle karar destek sunar.',
  projectScope: [
    'KAP bildirimleri, finans haberleri ve ekonomik/siyasi gelişmelerden otomatik veri toplama',
    'Ekonomik, finansal ve siyasi haber sınıflandırması',
    'FinBERT ve BERT tabanlı duygu analizi ile etki skoru üretimi',
    'BIST100, Borsa İstanbul sektör endeksleri ve USD/TRY üzerinde kısa vadeli etki analizi',
    'Altın fiyatlarının karşılaştırmalı piyasa göstergesi olarak sunumu',
    'Korelasyon, zaman serisi analizi ve haber-etki ilişki haritaları',
    'Etkileşimli dashboard, grafikler ve karar destek özet ekranları',
  ],
  reports: [
    {
      name: 'Project Proposal',
      pdf: 'https://drive.google.com/uc?export=download&id=1KM_fUIHkeib9lZCCMCSVGDYJZKF_NORK',
      docx: 'https://docs.google.com/document/d/10i-o1QLiRr3oCOsdA1w_HllGR5Kxb1wk/export?format=docx',
    },
    {
      name: 'Project Specifications Report',
      pdf: 'https://drive.google.com/uc?export=download&id=1OOTkQJlkIl3B4HRL1kdv6iLEGYo40fxa',
      docx: 'https://docs.google.com/document/d/1B8Twz8lZsJXy9p5Y4NM0uuRkT94046R-/export?format=docx',
    },
    {
      name: 'Analysis Report',
      pdf: 'https://drive.google.com/uc?export=download&id=1g0BnyKUhf-Qzjze5nY3prP6ZQkV5-JB0',
      docx: 'https://docs.google.com/document/d/1v5fLvTr79lXB-9ippDub-LkXReKtdut9/export?format=docx',
    },
    {
      name: 'PKE-Plan',
      pdf: 'https://drive.google.com/uc?export=download&id=1vHjstlLSdhx4rVjKJ56DKBMHzfKXTJYH',
      docx: 'https://docs.google.com/document/d/1iCDd_bDQFxXxLp95w_-VKcghloN9Rp-j/export?format=docx',
    },
    {
      name: 'High-Level Design Report',
      pdf: null,
      docx: 'https://docs.google.com/document/d/1OyX32AQsl6BgBoWxCeLs8AIEoCUtvzBb/export?format=docx',
    },
  ],
}

export const teamMembers = [
  {
    name: 'Ataberk Tekin',
    role: '',
    bio: 'TOBB ETÜ Bilgisayar Mühendisliği 4. Sınıf Öğrencisi | Yapay Zekâ ve NLP | Siber Güvenlik | Yazılım Geliştirme',
    linkedin: 'https://www.linkedin.com/in/ataberktekin',
    photo: '/team/ataberk-tekin.jpeg',
  },
  {
    name: 'Osman Kaymakçı',
    role: '',
    bio: 'TOBB ETÜ Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Yazılım ve siber güvenlik alanlarıyla ilgileniyor, bu alanlarda kendimi geliştirmeye devam ediyorum.',
    linkedin: 'https://www.linkedin.com/in/osman-kaymakçı-b441823b3?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    photo: '/team/osman-kaymakci.jpeg',
  },
  {
    name: 'Ahmet Kaan Tırhış',
    role: '',
    bio: 'TOBB ETÜ 4. Sınıf Bilgisayar Mühendisliği Öğrencisi. Doğal Dil İşleme (NLP), Siber Güvenlik, Backend Mimarileri',
    linkedin: 'https://www.linkedin.com/in/ahmet-kaan-t%C4%B1rh%C4%B1%C5%9F-5ba755333/',
    photo: '/team/ahmet-kaan-tirhis.jpeg',
  },
  {
    name: 'Mehmet Begun',
    role: '',
    bio: 'Bilgisayar Mühendisliği 4. Sınıf Öğrencisi | TOBB ETÜ | Yapay Zeka ve NLP',
    linkedin: 'https://www.linkedin.com/in/mehmetbegun/',
    photo: '/team/mehmet-begun.png',
  },
  {
    name: 'Taha Mert Ağım',
    role: '',
    bio: 'Tobb ETÜ Bilgisayar Mühendisliği 4. sınıf öğrencisiyim. Siber Güvenlik alanıyla ilgileniyorum ve gelişmeye açığım.',
    linkedin: 'https://www.linkedin.com/in/taha-mert-a%C4%9F%C4%B1m-6b85b334b/',
    photo: '/team/taha-mert-agim.jpeg',
  },
]

export const features = [
  {
    title: 'Haber Akışı ve Filtreleme',
    desc: 'KAP bildirimleri, finans haberleri ve ekonomik gelişmeleri güncel akış halinde sunar; filtreleme ile odaklanılacak haberler seçilir.',
    icon: '📰',
  },
  {
    title: 'Haber Sınıflandırma',
    desc: 'Haberleri ekonomik, finansal ve siyasi kategorilere ayırarak analiz sürecini yapılandırır.',
    icon: '🏷️',
  },
  {
    title: 'Duygu Analizi ve Etki Skoru',
    desc: 'FinBERT, BERT ve Transformer tabanlı modellerle duygu analizi yapar; her haber için piyasa etki skoru üretir.',
    icon: '🤖',
  },
  {
    title: 'BIST100 ve Borsa İstanbul Sektör Analizi',
    desc: 'BIST100 performansını ve Borsa İstanbul sektör endekslerini haber verileriyle birlikte inceler.',
    icon: '📈',
  },
  {
    title: 'USD/TRY ve Altın Karşılaştırması',
    desc: 'Döviz kuru ile haber ilişkilerini analiz eder; altın fiyatlarını karşılaştırmalı piyasa göstergesi olarak sunar.',
    icon: '💱',
  },
  {
    title: 'Korelasyon ve Etki Haritaları',
    desc: 'Korelasyon, zaman serisi analizi ve haber-etki ilişki haritalarıyla piyasa davranışlarını görselleştirir.',
    icon: '🗺️',
  },
]

export const workflowSteps = [
  'Haber Toplama (KAP · Finans)',
  'NLP Sınıflandırma',
  'FinBERT / BERT Analizi',
  'Piyasa Verisi Entegrasyonu',
  'Karar Destek Paneli',
]

export const technologies = [
  'Python',
  'PyTorch',
  'FinBERT',
  'BERT',
  'Transformers',
  'React',
  'FastAPI',
  'PostgreSQL',
]
