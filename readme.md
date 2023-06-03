![](project.gif)

Neste projeto segui a organização de pastas e arquivos sugeridas pelo React.

# Considerações importantes

## Configurar chave da Api
Adicionar a chave da api no arquivo ```server/.env``` na variável ```WEATHER_STACK_SECRET```

### Uso da Api paga
Descomentar a chamada da api no arquivo [weather.ts](./server/src/routes/weather.ts) e utilizá-la para ter acesso a função hora a hora da  versão paga.

Descomentar o código dentro de [WeatherCard.tsx](./web/src/components/WeatherCard.tsx) para utilizar a função hora a hora da Api paga.


# Tecnologias utilizadas nesse projeto

## React
Utilizanda para o desenvolvimento base do front-end.

## Axios
Utilizado para gerenciar as requisições.

## Next
Utilizado para o gerenciamento do servidor.

## Lucide React 
Biblioteca de ícones utilizadas.

## Tailwindcss
Biblioteca utilizada para estilização de componentes do front-end.

## Eslint da Rocketseat
Utilizado para identação e padronização de código.

## Fastify 
Utilizado para criação e gerenciamento de rotas do back-end.

## Zod
Utilizado para adicionar uma camada de validação no back-end.

## Prisma 
Utilizado para criar e gerenciar o banco de dados.