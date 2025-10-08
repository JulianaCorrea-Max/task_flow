# Projeto Front-End: Landing Page Interativa - TaskFlow

Esta é uma landing page responsiva e interativa para um aplicativo fictício de organização de tarefas chamado "TaskFlow". O projeto foi desenvolvido como parte de um exercício prático para demonstrar habilidades em HTML, CSS e JavaScript.

**Link do Projeto:** [Insira aqui o link do seu GitHub Pages após a hospedagem]

## ✨ Tecnologias Utilizadas

-   **HTML5:** Estrutura semântica e acessível.
-   **CSS3:** Estilização moderna, com Flexbox e Grid Layout, seguindo a metodologia Mobile-First.
-   **JavaScript (ES6+):** Interatividade do usuário, como menu de navegação, validação de formulário e animações de scroll.

---

## 🎯 Desafios Enfrentados

Durante o desenvolvimento, um dos principais desafios foi garantir que a **responsividade do menu de navegação** fosse fluida e sem quebras em diferentes dispositivos. A transição entre o menu "hambúrguer" (mobile) e o menu horizontal (desktop) exigiu atenção aos detalhes no CSS e a manipulação de classes com JavaScript.

Outro ponto interessante foi a implementação da **animação de fade-in ao rolar a página**. Optei por usar a `Intersection Observer API` em vez de eventos de scroll tradicionais, pois é uma abordagem muito mais performática e moderna, evitando cálculos desnecessários que poderiam sobrecarregar o navegador.

## 📚 Recursos Consultados

-   **MDN Web Docs:** Principal fonte de consulta para a sintaxe e funcionamento de APIs do JavaScript (como a Intersection Observer) e propriedades do CSS.
-   **CSS-Tricks:** Artigos e guias sobre Flexbox, Grid Layout e técnicas de design responsivo.
-   **Google Fonts & Font Awesome:** Para a seleção de tipografia e ícones, respectivamente.
-   **unDraw:** Para as ilustrações vetoriais gratuitas e de alta qualidade.

---

## 💡 Justificativas das Escolhas de Layout e Interatividade

-   **Layout (Mobile-First):** A abordagem mobile-first foi escolhida por ser uma prática recomendada que garante uma experiência de usuário sólida no dispositivo mais comum (celular) e, a partir daí, aprimora o layout para telas maiores. Isso resulta em um CSS mais limpo e organizado.

-   **Flexbox e Grid:** Utilizei Flexbox para alinhar componentes como o cabeçalho e as seções de conteúdo, devido à sua simplicidade para layouts de uma dimensão. O Grid foi usado na seção de "Funcionalidades" para criar um cartão de três colunas perfeitas de forma simples e robusta.

-   **Interatividade com JavaScript:**
    -   **Smooth Scroll:** Implementado para melhorar a experiência de navegação interna, tornando a rolagem entre as seções suave e agradável.
    -   **Validação de Formulário:** Adicionada para fornecer feedback instantâneo ao usuário, melhorando a usabilidade e evitando o envio de dados incompletos.
    -   **Animação de Scroll:** A animação de fade-in dá um toque de profissionalismo e dinamismo à página, guiando o foco do usuário à medida que ele explora o conteúdo.