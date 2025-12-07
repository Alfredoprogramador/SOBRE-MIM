import { Post } from '../types';

export const posts: Post[] = [
  {
    id: 1,
    title: {
      en: 'Modern Web Development Using Cutting-Edge Frameworks',
      pt: 'Desenvolvimento Web Moderno Utilizando Grandes Frameworks de Última Geração',
      es: 'Desarrollo Web Moderno Utilizando Grandes Frameworks de Última Generación',
    },
    category: {
      en: 'Web Development',
      pt: 'Desenvolvimento Web',
      es: 'Desarrollo Web',
    },
    excerpt: {
      en: 'Discover how modern web development leverages cutting-edge frameworks and tools like Visual Studio Code to build full-stack solutions. From dynamic interfaces with React to robust backends with Java and C#, and AI integration with Google AI Studio, explore the ecosystem that drives innovative and scalable applications.',
      pt: 'Descubra como o desenvolvimento web moderno utiliza frameworks de última geração e ferramentas como o Visual Studio Code para criar soluções full stack. Desde interfaces dinâmicas com React até back-ends robustos com Java e C#, e a integração de IA com Google AI Studio, explore o ecossistema que impulsiona aplicações inovadoras e escaláveis.',
      es: 'Descubra cómo el desarrollo web moderno utiliza frameworks de última generación y herramientas como Visual Studio Code para crear soluciones full-stack. Desde interfaces dinámicas con React hasta backends robustos con Java y C#, y la integración de IA con Google AI Studio, explore el ecosistema que impulsa aplicaciones innovadoras y escalables.',
    },
    content: {
      en: `In the ever-evolving landscape of web development, React has established itself as a dominant force for building user interfaces. However, client-side rendered React apps can suffer from slow initial load times and poor SEO performance. This is where frameworks like Next.js come in.

Next.js enhances React by providing a robust framework for server-side rendering (SSR) and static site generation (SSG). With SSR, the server renders the initial HTML, which is sent to the browser for a fast first contentful paint. SSG pre-renders pages at build time, offering incredible speed and reliability. This article explores the core concepts of Next.js, its file-based routing system, API routes, and how to leverage its features to build scalable and performant web applications.`,
      pt: `No cenário em constante evolução do desenvolvimento web, o React se estabeleceu como uma força dominante para a construção de interfaces de usuário. No entanto, aplicativos React renderizados no lado do cliente podem sofrer com tempos de carregamento iniciais lentos e baixo desempenho de SEO. É aqui que frameworks como o Next.js entram em cena.

O Next.js aprimora o React, fornecendo uma estrutura robusta para renderização no lado do servidor (SSR) e geração de sites estáticos (SSG). Com o SSR, o servidor renderiza o HTML inicial, que é enviado ao navegador para uma primeira pintura de conteúdo rápida. O SSG pré-renderiza as páginas em tempo de construção, oferecendo velocidade e confiabilidade incríveis. Este artigo explora os conceitos centrais do Next.js, seu sistema de roteamento baseado em arquivos, rotas de API e como aproveitar seus recursos para construir aplicações web escaláveis e de alto desempenho.`,
      es: `En el panorama en constante evolución del desarrollo web, React se ha consolidado como una fuerza dominante para la creación de interfaces de usuario. Sin embargo, las aplicaciones de React renderizadas en el lado del cliente pueden sufrir de tiempos de carga iniciales lentos y un rendimiento de SEO deficiente. Aquí es donde entran en juego frameworks como Next.js.

Next.js mejora React al proporcionar un marco robusto para la renderización del lado del servidor (SSR) y la generación de sitios estáticos (SSG). Con SSR, el servidor renderiza el HTML inicial, que se envía al navegador para una primera pintura de contenido rápida. SSG pre-renderiza las páginas en el momento de la compilación, ofreciendo una velocidad y fiabilidad increíbles. Este artículo explora los conceptos centrales de Next.js, su sistema de enrutamiento basado en archivos, las rutas de API y cómo aprovechar sus características para crear aplicaciones web escalables y de alto rendimiento.`,
    },
    author: 'Alfredo Recio Martan',
    date: 'October 26, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: {
      en: 'Cross-Platform vs. Native: The Future of Mobile App Development',
      pt: 'Plataforma Cruzada vs. Nativo: O Futuro do Desenvolvimento de Apps Móveis',
      es: 'Multiplataforma vs. Nativo: El Futuro del Desarrollo de Aplicaciones Móviles',
    },
    category: {
      en: 'Mobile Development',
      pt: 'Desenvolvimento Mobile',
      es: 'Desarrollo Móvil',
    },
    excerpt: {
      en: 'A comprehensive comparison between native (Swift/Kotlin) and cross-platform (React Native/Flutter) development, often powered by tools like Visual Studio Code, for building mobile applications.',
      pt: 'Uma comparação abrangente entre o desenvolvimento nativo (Swift/Kotlin) e multiplataforma (React Native/Flutter), frequentemente impulsionado por ferramentas como o Visual Studio Code, para a construção de aplicativos móveis.',
      es: 'Una comparación exhaustiva entre el desarrollo nativo (Swift/Kotlin) y multiplataforma (React Native/Flutter), a menudo impulsado por herramientas como Visual Studio Code, para la creación de aplicaciones móviles.',
    },
    content: {
      en: `Choosing the right technology stack for a mobile app is a critical decision. The classic debate pits native development (Swift for iOS, Kotlin for Android) against cross-platform solutions like React Native and Flutter. Native development offers the best performance and access to device features, but requires separate codebases for each platform.

Cross-platform frameworks promise a single codebase, reducing development time and cost. React Native allows web developers to leverage their existing skills, while Flutter, with its custom rendering engine, offers high performance and a rich set of widgets. This post breaks down the pros and cons of each approach, considering factors like performance, UI/UX consistency, development costs, and long-term maintenance.`,
      pt: `Escolher a pilha de tecnologia certa para um aplicativo móvel é uma decisão crítica. O debate clássico opõe o desenvolvimento nativo (Swift para iOS, Kotlin para Android) a soluções multiplataforma como React Native e Flutter. O desenvolvimento nativo oferece o melhor desempenho e acesso aos recursos do dispositivo, mas exige bases de código separadas para cada plataforma.

Frameworks multiplataforma promovem uma única base de código, reduzindo o tempo e o custo de desenvolvimento. O React Native permite que os desenvolvedores web aproveitem suas habilidades existentes, enquanto o Flutter, com seu motor de renderização personalizado, oferece alto desempenho e um rico conjunto de widgets. Este post analisa os prós e contras de cada abordagem, considerando fatores como desempenho, consistência de UI/UX, custos de desenvolvimento e manutenção a longo prazo.`,
      es: `Elegir la pila tecnológica adecuada para una aplicación móvil es una decisión crítica. El debate clásico enfrenta el desarrollo nativo (Swift para iOS, Kotlin para Android) con soluciones multiplataforma como React Native y Flutter. El desarrollo nativo ofrece el mejor rendimiento y acceso a las características del dispositivo, pero requiere bases de código separadas para cada plataforma.

Los marcos multiplataforma prometen una única base de código, reduciendo el tiempo y el coste de desarrollo. React Native permite a los desarrolladores web aprovechar sus habilidades existentes, mientras que Flutter, con su motor de renderizado personalizado, ofrece un alto rendimiento y un rico conjunto de widgets. Este post desglosa los pros y los contras de cada enfoque, considerando factores como el rendimiento, la consistencia de la UI/UX, los costos de desarrollo y el mantenimiento a largo plazo.`,
    },
    author: 'Alfredo Recio Martan',
    date: 'October 22, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=2106&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: {
      en: 'Building High-Converting E-commerce Platforms with Advanced Technologies',
      pt: 'Construindo Plataformas de E-commerce de Alta Conversão com Tecnologias Avançadas',
      es: 'Construyendo Plataformas de E-commerce de Alta Conversión con Tecnologías Avanzadas',
    },
    category: {
      en: 'E-commerce',
      pt: 'E-commerce',
      es: 'Comercio Electrónico',
    },
    excerpt: {
      en: 'Learn how decoupling your frontend from your backend with a headless CMS, using tools like Visual Studio Code, can create faster, more flexible, and personalized shopping experiences.',
      pt: 'Aprenda como desacoplar seu frontend do seu backend com um CMS headless, utilizando ferramentas como o Visual Studio Code, pode criar experiências de compra mais rápiddas, flexíveis e personalizadas.',
      es: 'Aprenda cómo desacoplar su frontend de su backend con un CMS headless, utilizando herramientas como Visual Studio Code, puede crear experiencias de compra más rápidas, flexibles y personalizadas.',
    },
    content: {
      en: `Traditional monolithic e-commerce platforms can be rigid and slow. A headless architecture decouples the content management system (the "body") from the presentation layer (the "head"). This allows developers to build custom frontends using modern technologies like React, Vue, or Angular, while managing products and content through a powerful backend API.

The benefits are numerous: improved performance, greater design flexibility, and the ability to deliver content to any channel—web, mobile, IoT devices, and more. We will walk through the architecture of a headless e-commerce site, popular headless CMS options like Shopify Plus, BigCommerce, and Contentful, and how to create a superior user experience that drives conversions.`,
      pt: `Plataformas de e-commerce monolíticas tradicionais podem ser rígidas e lentas. Uma arquitetura headless desacopla o sistema de gerenciamento de conteúdo (o "corpo") da camada de apresentação (a "cabeça"). Isso permite que os desenvolvedores criem frontends personalizados usando tecnologias modernas como React, Vue ou Angular, enquanto gerenciam produtos e conteúdo por meio de uma poderosa API de backend.

Os benefícios são numerosos: desempenho aprimorado, maior flexibilidade de design e a capacidade de entregar conteúdo para qualquer canal - web, mobile, dispositivos IoT e muito mais. Vamos percorrer a arquitetura de um site de e-commerce headless, opções populares de CMS headless como Shopify Plus, BigCommerce e Contentful, e como criar uma experiência de usuário superior que impulsiona as conversões.`,
      es: `Las plataformas de comercio electrónico monolíticas tradicionales pueden ser rígidas y lentas. Una arquitectura headless desacopla el sistema de gestión de contenidos (el "cuerpo") de la capa de presentación (la "cabeça"). Esto permite a los desarrolladores crear frontends personalizados utilizando tecnologías modernas como React, Vue o Angular, mientras gestionan productos y contenido a través de una potente API de backend.

Los beneficios son numerosos: rendimiento mejorado, mayor flexibilidad de diseño y la capacidad de entregar contenido a cualquier canal: web, móvil, dispositivos de IoT y más. Recorreremos la arquitectura de un sitio de comercio electrónico headless, las opciones populares de CMS headless como Shopify Plus, BigCommerce y Contentful, y cómo crear una experiencia de usuario superior que impulse las conversiones.`,
    },
    author: 'Alfredo Recio Martan',
    date: 'October 18, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: {
      en: 'SQL vs. NoSQL: Choosing the Right Database for Your Project',
      pt: 'SQL vs. NoSQL: Escolhendo o Banco de Dados Certo para o Seu Projeto',
      es: 'SQL vs. NoSQL: Eligiendo la Base de Datos Correcta para su Proyecto',
    },
    category: {
      en: 'Database Management',
      pt: 'Gerenciamento de Banco de Dados',
      es: 'Gestión de Bases de Datos',
    },
    excerpt: {
      en: 'Understand the fundamental differences between relational (SQL) and non-relational (NoSQL) databases, managed with tools like Visual Studio Code, to make an informed decision for your application.',
      pt: 'Entenda as diferenças fundamentais entre bancos de dados relacionais (SQL) e não relacionais (NoSQL), gerenciados com ferramentas como o Visual Studio Code, para tomar uma decisão informada para sua aplicação.',
      es: 'Comprenda las diferencias fundamentales entre las bases de datos relacionales (SQL) y no relacionales (NoSQL), gestionadas con herramientas como Visual Studio Code, para tomar una decisión informada para su aplicación.',
    },
    content: {
      en: `The database is the backbone of any application. For decades, SQL databases like PostgreSQL and MySQL have been the standard, offering structured data, ACID compliance, and powerful querying capabilities. However, the rise of big data and the need for scalability and flexibility led to the emergence of NoSQL databases.

NoSQL databases come in various types: document stores (MongoDB), key-value stores (Redis), column-family stores (Cassandra), and graph databases (Neo4j). They excel at handling unstructured data, horizontal scaling, and high-velocity data streams. This article compares the two paradigms, exploring their data models, scalability, consistency, and typical use cases to help you choose the right database architecture.`,
      pt: `O banco de dados é a espinha dorsal de qualquer aplicação. Por décadas, bancos de dados SQL como PostgreSQL e MySQL foram o padrão, oferecendo dados estruturados, conformidade com ACID e poderosas capacidades de consulta. No entanto, o surgimento do big data e a necessidade de escalabilidade e flexibilidade levaram ao surgimento de bancos de dados NoSQL.

Bancos de dados NoSQL vêm em vários tipos: armazenamentos de documentos (MongoDB), armazenamentos de chave-valor (Redis), armazenamentos de família de colunas (Cassandra) e bancos de dados de grafos (Neo4j). Eles se destacam no manuseio de dados não estruturados, escalonamento horizontal e fluxos de dados de alta velocidade. Este artigo compara os dois paradigmas, explorando seus modelos de dados, escalabilidade, consistência e casos de uso típicos para ajudá-lo a escolher a arquitetura de banco de dados certa.`,
      es: `La base de datos es la columna vertebral de cualquier aplicación. Durante décadas, las bases de datos SQL como PostgreSQL y MySQL han sido el estándar, ofreciendo datos estructurados, cumplimiento de ACID y potentes capacidades de consulta. Sin embargo, el auge del big data y la necesidad de escalabilidad y flexibilidad llevaron a la aparición de las bases de datos NoSQL.

Las bases de datos NoSQL vienen en varios tipos: almacenes de documentos (MongoDB), almacenes de clave-valor (Redis), almacenes de familia de columnas (Cassandra) и bases de datos de grafos (Neo4j). Se destacan en el manejo de datos no estructurados, el escalado horizontal y los flujos de datos de alta velocidad. Este artículo compara los dos paradigmas, explorando sus modelos de datos, escalabilidad, consistencia y casos de uso típicos para ayudarlo a elegir la arquitectura de base de datos correcta.`,
    },
    author: 'Alfredo Recio Martan',
    date: 'October 15, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    title: {
      en: 'Top 5 Web App Vulnerabilities and How to Prevent Them',
      pt: 'As 5 Maiores Vulnerabilidades de Aplicações Web e Como Preveni-las',
      es: 'Las 5 Principales Vulnerabilidades de Aplicaciones Web y Cómo Prevenirlas',
    },
    category: {
      en: 'Information Security',
      pt: 'Segurança da Informação',
      es: 'Seguridad de la Información',
    },
    excerpt: {
      en: 'A practical guide for developers on identifying and mitigating common security risks like XSS, SQL Injection, and CSRF, using tools like Visual Studio Code to write secure code.',
      pt: 'Um guia prático para desenvolvedores sobre como identificar e mitigar riscos de segurança comuns como XSS, Injeção de SQL e CSRF, usando ferramentas como o Visual Studio Code para escrever código seguro.',
      es: 'Una guía práctica para desarrolladores sobre cómo identificar y mitigar riesgos de seguridad comunes como XSS, inyección de SQL y CSRF, utilizando herramientas como Visual Studio Code para escribir código seguro.',
    },
    content: {
      en: `In today's digital world, application security is not an afterthought—it's a requirement. Developers must be vigilant in protecting their applications from malicious attacks. This post covers five of the most common web application vulnerabilities as listed by OWASP (Open Web Application Security Project).

We will explain in simple terms what Cross-Site Scripting (XSS), SQL Injection (SQLi), Cross-Site Request Forgery (CSRF), Broken Authentication, and Security Misconfiguration are. More importantly, we provide practical, code-level examples and best practices for preventing these vulnerabilities in your own projects, from input validation and parameterized queries to secure session management and proper server configuration.`,
      pt: `No mundo digital de hoje, a segurança de aplicações não é uma reflexão tardia - é um requisito. Os desenvolvedores devem ser vigilantes na proteção de suas aplicações contra ataques maliciosos. Este post aborda cinco das vulnerabilidades mais comuns de aplicações web, conforme listado pelo OWASP (Open Web Application Security Project).

Explicaremos em termos simples o que são Cross-Site Scripting (XSS), SQL Injection (SQLi), Cross-Site Request Forgery (CSRF), Autenticação Quebrada e Configuração Incorreta de Segurança. Mais importante, fornecemos exemplos práticos em nível de código e as melhores práticas para prevenir essas vulnerabilities em seus próprios projetos, desde a validação de entrada e consultas parametrizadas até o gerenciamento seguro de sessões e a configuração adequada do servidor.`,
      es: `En el mundo digital actual, la seguridad de las aplicaciones no es una ocurrencia tardía, es un requisito. Los desarrolladores deben estar atentos para proteger sus aplicaciones de ataques maliciosos. Esta publicación cubre cinco de las vulnerabilidades más comunes de las aplicaciones web según la lista de OWASP (Open Web Application Security Project).

Explicaremos en términos sencillos qué son Cross-Site Scripting (XSS), Inyección SQL (SQLi), Cross-Site Request Forgery (CSRF), Autenticación Rota y Configuración de Seguridad Incorrecta. Más importante aún, proporcionamos ejemplos prácticos a nivel de código y las mejores prácticas para prevenir estas vulnerabilities en sus propios proyectos, desde la validación de entradas y consultas parametrizadas hasta la gestión segura de sesiones y la configuración adecuada del servidor.`,
    },
    author: 'Alfredo Recio Martan',
    date: 'October 11, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=800&auto=format=fit&crop',
  },
  {
    id: 6,
    title: {
      en: 'MODERN DESKTOP APPS',
      pt: 'APPS DESKTOP MODERNAS',
      es: 'APPS DE ESCRITORIO MODERNAS',
    },
    category: {
      en: 'Desktop Development',
      pt: 'Desenvolvimento Desktop',
      es: 'Desarrollo de Escritorio',
    },
    excerpt: {
      en: 'Discover how web technologies and editors like Visual Studio Code are being used to build powerful, cross-platform desktop applications with frameworks like Electron and Tauri.',
      pt: 'Descubra como as tecnologias da web e editores como o Visual Studio Code estão sendo usados para construir aplicações de desktop poderosas e multiplataforma com frameworks como Electron e Tauri.',
      es: 'Descubra cómo se están utilizando las tecnologías web y editores como Visual Studio Code para crear potentes aplicaciones de escritorio multiplataforma con marcos como Electron y Tauri.',
    },
    content: {
      en: `While the web and mobile have dominated the software landscape, desktop applications remain essential for many professional and creative tasks. Frameworks like Electron have revolutionized desktop development by allowing developers to build apps using HTML, CSS, and JavaScript. Famous apps like Visual Studio Code, Slack, and Discord are built with Electron.

However, Electron has been criticized for its resource usage. A new contender, Tauri, has emerged, promising smaller, faster, and more secure desktop apps by using a Rust backend and the operating system's native web renderer. This article compares the architecture, performance, and developer experience of both frameworks, helping you decide which is right for your next desktop project.`,
      pt: `Embora a web e o mobile tenham dominado o cenário de software, as aplicações de desktop continuam essenciais para muitas tarefas profissionais e criativas. Frameworks como o Electron revolucionaram o desenvolvimento de desktop, permitindo que os desenvolvedores criem aplicativos usando HTML, CSS e JavaScript. Aplicativos famosos como Visual Studio Code, Slack e Discord são construídos com Electron.

No entanto, o Electron tem sido criticado por seu uso de recursos. Um novo concorrente, Tauri, surgiu, prometendo aplicativos de desktop menores, mais rápidos и mais seguros, usando um backend em Rust e o renderizador da web nativo do sistema operacional. Este artigo compara a arquitetura, o desempenho e a experiência do desenvolvedor de ambos os frameworks, ajudando você a decidir qual é o certo para o seu próximo projeto de desktop.`,
      es: `Si bien la web y los dispositivos móviles han dominado el panorama del software, las aplicaciones de escritorio siguen siendo esenciales para muchas tareas profesionales y creativas. Marcos como Electron han revolucionado el desarrollo de escritorio al permitir a los desarrolladores crear aplicaciones utilizando HTML, CSS y JavaScript. Aplicaciones famosas como Visual Studio Code, Slack y Discord están construidas con Electron.

Sin embargo, Electron ha sido criticado por su uso de recursos. Ha surgido un nuevo contendiente, Tauri, que promete aplicaciones de escritorio más pequeñas, rápidas y seguras mediante el uso de un backend de Rust y el renderizador web nativo del sistema operativo. Este artículo compara la arquitectura, el rendimiento y la experiencia del desarrollador de ambos marcos, ayudándole a decidir cuál es el adecuado para su próximo proyecto de escritorio.`,
    },
    author: 'Alfredo Recio Martan',
    date: 'October 07, 2023',
    imageUrl: 'https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];