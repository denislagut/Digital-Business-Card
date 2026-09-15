import { PrismaClient, SkillLevel } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.profile.deleteMany();

  await prisma.profile.create({
    data: {
      fullName: 'Денис Лагутин',

      headline:
        'Backend Developer | C#/.NET · TypeScript/Node.js · PostgreSQL',

      location: 'Россия / Удалённо',

      summary:
        'Backend-разработчик с высшим образованием по направлению «Программная инженерия». ' +
        'Разрабатываю серверные приложения и API на C#/.NET и TypeScript/Node.js, проектирую реляционные модели данных, реализую бизнес-логику, интеграции с внешними сервисами и контейнеризированные окружения. ' +
        'Имею практический опыт работы с ASP.NET Core, Entity Framework Core, NestJS, Fastify, REST API, GraphQL, Prisma, PostgreSQL, CockroachDB, SQLAlchemy и Docker. ' +
        'Также использую Python для асинхронных backend-приложений и работал с Ethereum/Web3-интеграциями. ' +
        'Основные профессиональные интересы: backend-разработка, проектирование API, базы данных, архитектура приложений, интеграции и асинхронные системы.',

      email: 'denlagutin336@gmail.com',

      githubUrl: 'https://github.com/denislagut',

      resumeAsset: 's3://digital-card-assets/resume.pdf',

      skills: {
        create: [
          // Языки программирования
          {
            name: 'C#',
            category: 'Язык программирования',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'TypeScript',
            category: 'Язык программирования',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'JavaScript',
            category: 'Язык программирования',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'Python',
            category: 'Язык программирования',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'C++',
            category: 'Язык программирования',
            level: SkillLevel.FAMILIAR
          },
          {
            name: 'PHP',
            category: 'Язык программирования',
            level: SkillLevel.FAMILIAR
          },

          // Backend
          {
            name: 'ASP.NET Core',
            category: 'Backend',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'Node.js',
            category: 'Backend',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'NestJS',
            category: 'Backend',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'Fastify',
            category: 'Backend',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'aiogram',
            category: 'Backend',
            level: SkillLevel.PRACTICAL
          },

          // API и интеграции
          {
            name: 'REST API',
            category: 'API',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'GraphQL',
            category: 'API',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'Apollo GraphQL',
            category: 'API',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'JWT Authentication',
            category: 'Безопасность',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'HTTP',
            category: 'Сетевые технологии',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'Интеграция внешних API',
            category: 'Интеграции',
            level: SkillLevel.PRACTICAL
          },

          // Базы данных
          {
            name: 'PostgreSQL',
            category: 'Базы данных',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'MySQL',
            category: 'Базы данных',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'CockroachDB',
            category: 'Базы данных',
            level: SkillLevel.FAMILIAR
          },

          // ORM и доступ к данным
          {
            name: 'Entity Framework Core',
            category: 'ORM',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'Prisma ORM',
            category: 'ORM',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'SQLAlchemy',
            category: 'ORM',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'Alembic',
            category: 'Миграции БД',
            level: SkillLevel.PRACTICAL
          },

          // Инфраструктура
          {
            name: 'Docker',
            category: 'DevOps',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'Docker Compose',
            category: 'DevOps',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'Nginx',
            category: 'DevOps',
            level: SkillLevel.FAMILIAR
          },
          {
            name: 'CI/CD',
            category: 'DevOps',
            level: SkillLevel.FAMILIAR
          },
          {
            name: 'Git',
            category: 'Инструменты',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'MinIO / S3-compatible storage',
            category: 'Хранилища',
            level: SkillLevel.FAMILIAR
          },

          // Архитектура и инженерные навыки
          {
            name: 'ООП',
            category: 'Инженерные навыки',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'SOLID',
            category: 'Инженерные навыки',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'Алгоритмы и структуры данных',
            category: 'Computer Science',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'Клиент-серверная архитектура',
            category: 'Архитектура',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'Реляционное моделирование данных',
            category: 'Архитектура',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'Асинхронное программирование',
            category: 'Инженерные навыки',
            level: SkillLevel.PRACTICAL
          },

          // Web3
          {
            name: 'ethers.js',
            category: 'Web3',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'Ethereum / Web3',
            category: 'Web3',
            level: SkillLevel.PRACTICAL
          },

          // Frontend
          {
            name: 'React',
            category: 'Frontend',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'HTML5 / CSS3',
            category: 'Frontend',
            level: SkillLevel.PRACTICAL
          },

          // Тестирование и качество кода
          {
            name: 'Jest',
            category: 'Тестирование',
            level: SkillLevel.FAMILIAR
          },
          {
            name: 'pytest',
            category: 'Тестирование',
            level: SkillLevel.FAMILIAR
          },
          {
            name: 'pytest-asyncio',
            category: 'Тестирование',
            level: SkillLevel.FAMILIAR
          },
          {
            name: 'ESLint / Prettier',
            category: 'Качество кода',
            level: SkillLevel.PRACTICAL
          },

          // AI-инструменты
          {
            name: 'Cursor',
            category: 'AI-инструменты',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'ChatGPT',
            category: 'AI-инструменты',
            level: SkillLevel.PROFICIENT
          },
          {
            name: 'Codex',
            category: 'AI-инструменты',
            level: SkillLevel.PRACTICAL
          },
          {
            name: 'Claude Code',
            category: 'AI-инструменты',
            level: SkillLevel.PRACTICAL
          },

          // Английский
          {
            name: 'Английский — B1 Intermediate',
            category: 'Языки',
            level: SkillLevel.PRACTICAL
          }
        ]
      },

      projects: {
        create: [
          {
            title: 'A* / Alpha-Beta Pruning Comprehension System',

            description:
              'Backend-подсистема образовательной платформы для анализа решений алгоритмических задач. Спроектировал архитектуру приложения и структуру реляционной базы данных, реализовал REST API и основную бизнес-логику.',

            sourceUrl:
              'https://github.com/denislagut/AICourseTester2.0',

            highlights: [
              'Спроектировал архитектуру backend-приложения и структуру реляционной базы данных',
              'Реализовал REST API и основную бизнес-логику на ASP.NET Core',
              'Организовал взаимодействие с PostgreSQL через Entity Framework Core',
              'Настроил взаимодействие frontend и backend и конфигурацию приложения через переменные окружения',
              'Подготовил Docker Compose-окружение для ASP.NET Core и PostgreSQL',
              'Настроил persistent volumes, healthcheck базы данных и HTTPS-конфигурацию backend'
            ],

            stack: [
              'C#',
              'ASP.NET Core',
              'Entity Framework Core',
              'PostgreSQL',
              'REST API',
              'Docker',
              'Docker Compose'
            ]
          },

          {
            title: 'Job Market Oracle',

            description:
              'Backend-сервис для сбора, обработки и анализа данных рынка вакансий. Реализует процессы получения вакансий, нормализации технологических метрик и расчёта прогнозных показателей.',

            sourceUrl:
              'https://github.com/denislagut/Job-Market-Oracle',

            highlights: [
              'Разработал модульную backend-архитектуру на NestJS и TypeScript',
              'Организовал работу с PostgreSQL через Prisma ORM',
              'Реализовал процессы сбора данных о вакансиях',
              'Реализовал нормализацию метрик востребованности технологий',
              'Реализовал отдельные процессы расчёта прогнозных показателей',
              'Использовал миграции базы данных и seed-данные',
              'Настроил валидацию и конфигурацию через переменные окружения',
              'Подготовил Docker Compose-окружение с PostgreSQL и persistent storage'
            ],

            stack: [
              'TypeScript',
              'Node.js',
              'NestJS',
              'Prisma',
              'PostgreSQL',
              'Docker',
              'Docker Compose'
            ]
          },

          {
            title: 'Digital Business Card API',

            description:
              'Backend-приложение цифровой визитной карточки разработчика. Предоставляет через GraphQL API структурированные данные профиля, навыков, проектов, практического опыта, образования и сертификатов.',

            sourceUrl:
              'https://github.com/denislagut/Digital-Business-Card',

            highlights: [
              'Разработал code-first GraphQL API на NestJS и Apollo GraphQL',
              'Разделил backend на модули, resolvers, services, DTO и модели',
              'Спроектировал модели данных для профиля, навыков, проектов, опыта, образования и сертификатов',
              'Реализовал связи между сущностями, ограничения и каскадное удаление через Prisma',
              'Использовал Prisma ORM для работы с CockroachDB, миграций и seed-данных',
              'Реализовал валидацию входящих GraphQL-данных',
              'Интегрировал MinIO как S3-совместимое объектное хранилище',
              'Настроил Docker Compose-окружение для инфраструктурных зависимостей'
            ],

            stack: [
              'TypeScript',
              'Node.js',
              'NestJS',
              'GraphQL',
              'Apollo GraphQL',
              'Prisma',
              'CockroachDB',
              'Docker',
              'Docker Compose',
              'MinIO',
              'S3'
            ]
          },

          {
            title: 'NeiroLagut Bot — AI Telegram Assistant',

            description:
              'Асинхронный Telegram-бот с интеграцией LLM, хранением истории диалогов и разделённой backend-архитектурой.',

            sourceUrl:
              'https://github.com/denislagut/NeiroLagut_bot',

            highlights: [
              'Разработал асинхронного Telegram-бота на Python и aiogram',
              'Интегрировал LLM через Groq API',
              'Реализовал асинхронную обработку запросов с использованием asyncio',
              'Организовал хранение пользователей и истории диалогов в PostgreSQL',
              'Использовал SQLAlchemy для доступа к данным и Alembic для миграций',
              'Разделил приложение на handlers, services, repositories, models и database layer',
              'Реализовал streaming ответов, rate limiting и логирование',
              'Настроил PostgreSQL через Docker Compose с persistent storage и healthcheck'
            ],

            stack: [
              'Python',
              'aiogram',
              'asyncio',
              'PostgreSQL',
              'SQLAlchemy',
              'Alembic',
              'Groq API',
              'Docker',
              'Docker Compose'
            ]
          },

          {
            title: 'Ethereum Blockchain Tracker',

            description:
              'Backend-сервис для мониторинга сети Ethereum, обработки блоков, транзакций, событий смарт-контрактов и пользовательских адресов с сохранением данных в PostgreSQL.',

            sourceUrl:
              'https://github.com/denislagut/blockchain-wallet-tracker',

            highlights: [
              'Реализовал получение и обработку блоков и транзакций Ethereum',
              'Реализовал отслеживание событий смарт-контрактов и пользовательских адресов',
              'Организовал хранение обработанных blockchain-данных в PostgreSQL',
              'Интегрировал Ethereum RPC через ethers.js',
              'Разделил blockchain-логику, работу с БД и конфигурацию приложения',
              'Настроил PostgreSQL через Docker Compose с persistent storage',
              'Развернул собственный ERC-20 токен в тестовой сети Sepolia'
            ],

            stack: [
              'TypeScript',
              'Node.js',
              'Fastify',
              'ethers.js',
              'PostgreSQL',
              'Ethereum',
              'Web3',
              'Docker',
              'Docker Compose'
            ]
          }
        ]
      },

      experiences: {
        create: [
          {
            company: 'Самостоятельные и учебные проекты',

            role: 'Backend Developer',

            startedAt: new Date('2024-01-01T00:00:00.000Z'),

            endedAt: null,

            description:
              'Проектирование и разработка backend- и fullstack-приложений на C#/.NET, TypeScript/Node.js и Python. Работа с REST и GraphQL API, реляционными базами данных, ORM, асинхронной обработкой данных, внешними API и Docker-окружениями. Реализованные проекты включают образовательную платформу, сервис анализа рынка вакансий, GraphQL API цифровой визитной карточки, AI Telegram-бот и сервис мониторинга Ethereum.',

            stack: [
              'C#',
              'ASP.NET Core',
              'TypeScript',
              'Node.js',
              'NestJS',
              'Python',
              'REST API',
              'GraphQL',
              'PostgreSQL',
              'Entity Framework Core',
              'Prisma',
              'SQLAlchemy',
              'Docker'
            ]
          }
        ]
      },

      educations: {
        create: [
          {
            institution:
              'Брянский государственный технический университет',

            degree: 'Бакалавриат',

            field: 'Программная инженерия',

            startedAt: new Date('2022-09-01T00:00:00.000Z'),

            endedAt: new Date('2026-06-30T00:00:00.000Z'),

            description:
              'Факультет информационных технологий. Очная форма обучения. Получил фундаментальную подготовку в области разработки программного обеспечения, алгоритмов и структур данных, баз данных, клиент-серверной архитектуры, сетевых технологий, проектирования программных систем и управления разработкой.'
          }
        ]
      },

      certifications: {
        create: [
          {
            title: 'Инженер облачных сервисов',

            issuer:
              'АНО ДПО «Образовательные технологии Яндекса»',

            issuedAt: new Date('2025-05-14T00:00:00.000Z'),

            credentialUrl: null,

            assetUrl:
              's3://digital-card-assets/certificates/yandex-cloud-services-engineer.pdf',

            description:
              'Дополнительная общеобразовательная программа объёмом 40 часов. В программу входили виртуальные машины, хранение и анализ данных, DevOps и автоматизация, Serverless, безопасность, прогнозирование затрат и оптимизация расходов.'
          }
        ]
      }
    }
  });
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });