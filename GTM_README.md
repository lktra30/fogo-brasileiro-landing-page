# Google Tag Manager Integration

Este projeto está configurado com Google Tag Manager (GTM) usando o container ID: `GTM-NPBXCHHC`.

## Configuração

O GTM foi implementado no arquivo `index.html` com os snippets necessários:
- Script no `<head>` para carregamento do GTM
- Noscript tag no `<body>` para fallback quando JavaScript está desabilitado

## Utilitários para Tracking

O arquivo `src/lib/gtm.ts` contém funções utilitárias para enviar eventos personalizados para o GTM:

### Funções Disponíveis

#### `gtmEvent(eventName: string, eventData?: Record<string, unknown>)`
Função genérica para enviar qualquer evento personalizado.

```typescript
import { gtmEvent } from '@/lib/gtm';

gtmEvent('custom_event', {
  category: 'engagement',
  action: 'click',
  label: 'header_logo'
});
```

#### `gtmPageView(pagePath: string, pageTitle?: string)`
Rastreia visualizações de página.

```typescript
import { gtmPageView } from '@/lib/gtm';

gtmPageView('/menu', 'Menu - Fire Pit');
```

#### `gtmButtonClick(buttonName: string, section?: string)`
Rastreia cliques em botões.

```typescript
import { gtmButtonClick } from '@/lib/gtm';

gtmButtonClick('order_now', 'hero_section');
```

#### `gtmMenuInteraction(itemName: string, category?: string)`
Rastreia interações com itens do menu.

```typescript
import { gtmMenuInteraction } from '@/lib/gtm';

gtmMenuInteraction('picanha_premium', 'meat_dishes');
```

#### `gtmFormSubmit(formName: string, formType?: string)`
Rastreia envios de formulário.

```typescript
import { gtmFormSubmit } from '@/lib/gtm';

gtmFormSubmit('contact_form', 'reservation');
```

#### `gtmScrollDepth(percentage: number)`
Rastreia profundidade de rolagem da página.

```typescript
import { gtmScrollDepth } from '@/lib/gtm';

gtmScrollDepth(50); // 50% da página foi visualizada
```

## Exemplos de Uso

### Em Componentes React

```typescript
import { gtmButtonClick, gtmMenuInteraction } from '@/lib/gtm';

const MenuComponent = () => {
  const handleOrderClick = (itemName: string) => {
    gtmMenuInteraction(itemName, 'food_items');
    gtmButtonClick('add_to_cart', 'menu_section');
    // ... resto da lógica
  };

  return (
    <button onClick={() => handleOrderClick('Picanha Premium')}>
      Order Now
    </button>
  );
};
```

### Tracking de Scroll

```typescript
import { gtmScrollDepth } from '@/lib/gtm';

useEffect(() => {
  const handleScroll = () => {
    const scrolled = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
    
    if (scrolled >= 25 && !scrollTracked.current.quarter) {
      gtmScrollDepth(25);
      scrollTracked.current.quarter = true;
    }
    if (scrolled >= 50 && !scrollTracked.current.half) {
      gtmScrollDepth(50);
      scrollTracked.current.half = true;
    }
    if (scrolled >= 75 && !scrollTracked.current.threeQuarters) {
      gtmScrollDepth(75);
      scrollTracked.current.threeQuarters = true;
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

## Verificação da Implementação

Para verificar se o GTM está funcionando corretamente:

1. Abra as ferramentas de desenvolvedor do navegador
2. Vá para a aba "Console"
3. Digite `window.dataLayer` - deve retornar um array
4. Use o Google Tag Assistant ou GTM Preview mode para debugging

## Tags Recomendadas para Configurar no GTM

### Eventos de Conversão
- **Reservas**: Quando um usuário faz uma reserva
- **Pedidos**: Quando um usuário faz um pedido
- **Contato**: Quando alguém envia o formulário de contato

### Eventos de Engajamento
- **Visualização de Menu**: Quando alguém acessa a seção do menu
- **Scroll Depth**: Profundidade de rolagem (25%, 50%, 75%, 100%)
- **Tempo na Página**: Quanto tempo o usuário passa na página

### Eventos de Navegação
- **Cliques em Botões**: Botões importantes como "Order Now", "Reserve Table"
- **Links Externos**: Cliques em redes sociais, mapas, etc.
- **Interações com Carrossel**: Se houver carrosséis de imagens/produtos

## Configuração no Google Tag Manager

1. Acesse [Google Tag Manager](https://tagmanager.google.com/)
2. Selecione o container `GTM-NPBXCHHC`
3. Configure triggers baseados nos eventos personalizados enviados
4. Crie tags para Google Analytics, Facebook Pixel, etc.
5. Teste usando o Preview mode
6. Publique as mudanças

## Considerações de Privacidade

Lembre-se de:
- Implementar um banner de cookies se necessário
- Configurar consentimento de tracking conforme LGPD/GDPR
- Permitir que usuários optem por não serem rastreados
