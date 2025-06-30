### 🏠 **Tela Inicial**
- **Escolha de tipo de pizza**: Pizza inteira, meio a meio ou 3 sabores
- **Informações da pizzaria**: Avaliações, endereço e contatos
- **Links para redes sociais**: Google e Instagram

### 📱 **Sistema de Cardápio**
- **Categorias organizadas**: Pizzas, Esfihas, Lanches, Bebidas, Beirutes, Fogazzas e Adicionais
- **Busca inteligente**: Pesquisa por nome, descrição ou categoria
- **Filtros dinâmicos**: Navegação rápida entre categorias
- **Imagens ilustrativas**: Cada produto com sua imagem

### 🍕 **Personalização de Pizzas**
- **Múltiplos sabores**: Suporte para pizza inteira, meio a meio e 3 sabores
- **Tamanhos**: Broto e Grande com preços diferenciados
- **Bordas recheadas**: Cheddar, Requeijão, Catupiry Original e Chocolate
- **Sistema de adicionais**: Mais de 30 opções com preços para pizza inteira/meia
- **Cálculo automático**: Valor baseado no sabor de maior preço para pizzas mistas

### 🛒 **Carrinho Inteligente**
- **Resumo detalhado**: Todos os itens com especificações completas
- **Observações personalizadas**: Campo para comentários por item
- **Cálculo automático**: Subtotal, taxa de entrega e total
- **Edição rápida**: Adicionar/remover itens e observações

### 📋 **Sistema de Checkout**
- **3 etapas organizadas**: Itens → Dados → Pagamento
- **Busca automática de CEP**: Integração com API ViaCEP
- **Opções de entrega**: Entrega (R$ 5,00) ou Retirada no local
- **Múltiplas formas de pagamento**: Cartão, Dinheiro ou PIX
- **Validação de dados**: Campos obrigatórios e verificações

### 📱 **Integração WhatsApp**
- **Envio automático**: Resumo completo formatado para WhatsApp
- **Dados organizados**: Cliente, endereço, itens e pagamento
- **Link direto**: Abertura automática do WhatsApp com mensagem

### ⚙️ **Painel Administrativo**
- **Acesso via URL**: `?admin=true` para habilitar funcionalidades admin
- **CRUD completo**: Criar, editar e excluir produtos
- **Gestão de categorias**: Organização automática por tipo
- **Configuração de sabores**: Para bebidas e fogazzas
- **Upload de imagens**: URLs de imagens para produtos

### 💾 **Persistência de Dados**
- **LocalStorage**: Carrinho e produtos salvos localmente
- **Estado mantido**: Dados preservados entre sessões
- **Recuperação automática**: Retoma carrinho em caso de fechamento

## 🚀 Tecnologias Utilizadas

- **React 18.2**: Framework principal com hooks modernos
- **Tailwind CSS 3.1**: Estilização responsiva e utilitária
- **Lucide React**: Ícones modernos e consistentes
- **ViaCEP API**: Busca automática de endereços
- **localStorage**: Persistência de dados local
- **WhatsApp API**: Integração para envio de pedidos

## 📱 Design Responsivo

- **Mobile First**: Otimizado para dispositivos móveis
- **Interface intuitiva**: UX/UI pensada para facilidade de uso
- **Tema da marca**: Cores vermelhas características da pizzaria
- **Animações sutis**: Transições suaves para melhor experiência
- **Feedback visual**: Estados de carregamento e validação

## 🏗️ Estrutura do Projeto



src/ ├── components/ │ └── NapolesPizzaria.jsx # Componente principal ├── index.js # Ponto de entrada ├── index.css # Estilos globais └── App.js # Componente raiz

public/ ├── index.html # Template HTML └── favicon.ico # Ícone da aplicação


## 📦 Instalação e Uso

### Pré-requisitos
- Node.js 16 ou superior
- npm ou yarn

### Instalação
```bash
# Clone o repositório
git clone [URL_DO_REPOSITORIO]

# Entre na pasta
cd cardapio-napoles

# Instale as dependências
npm install

# Configure o Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Inicie o servidor de desenvolvimento
npm start


Build para Produção

# Gere a build otimizada
npm run build

# Os arquivos estarão na pasta 'build/'


⚙️ Configurações

WhatsApp

No arquivo src/components/NapolesPizzaria.jsx, altere:

const pizzariaPhone = '5511999999999'; // Seu número do WhatsApp


Dados da Pizzaria

Atualize as informações da empresa no componente:





Nome e endereço



Telefones de contato



Links das redes sociais



Avaliações e comentários

Produtos





Acesse com ?admin=true na URL



Use o painel admin para gerenciar o cardápio



Produtos são salvos no localStorage

🔧 Personalização

Cores

Edite tailwind.config.js para alterar a paleta de cores:

colors: {
  'napoles-red': {
    // Suas cores personalizadas
  }
}


Layout

Modifique os componentes em NapolesPizzaria.jsx:





Header: Logo e navegação



Footer: Informações da empresa



Cards: Estrutura dos produtos

📈 Funcionalidades Futuras





Sistema de cupons e promoções



Integração com sistemas de pagamento



Notificações push



Sistema de fidelidade



Analytics de vendas



API backend para persistência



App mobile nativo



Sistema de avaliações

🤝 Contribuição





Faça um fork do projeto



Crie uma branch para sua feature (git checkout -b feature/nova-feature)



Commit suas mudanças (git commit -am 'Adiciona nova feature')



Push para a branch (git push origin feature/nova-feature)



Abra um Pull Request

📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para detalhes.

📞 Contato

Nápoles Pizzaria





📍 Av. José Miguel Ackel, 1259 - Guarulhos/SP



📞 (11) 2087-7901 | (11) 2087-7902



📱 WhatsApp: [Configurar número]



📸 Instagram: @pizzarianapoles_



⭐ Desenvolvido com ❤️ para a melhor experiência de pedidos online!
