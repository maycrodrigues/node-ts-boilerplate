module.exports = {
  extends: ['@commitlint/config-conventional'],
  parserPreset: 'conventional-changelog-conventionalcommits',
  rules: {
    'body-leading-blank': [1, 'always'],
    'body-max-line-length': [2, 'always', 100],
    'footer-leading-blank': [1, 'always'],
    'footer-max-line-length': [2, 'always', 100],
    'header-max-length': [2, 'always', 100],
    'subject-case': [
      2,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
    'subject-empty': [2, 'never'],
    'subject-full-stop': [2, 'never', '.'],
    'type-case': [2, 'always', 'lower-case'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'style',
        'test',
      ],
    ],
  },
  prompt: {
    questions: {
      type: {
        description: 'Selecione o tipo de alteração que você está commitando:',
        enum: {
          feat: {
            description: 'Um novo recurso',
            title: 'Features',
            emoji: '✨',
          },
          fix: {
            description: 'Uma correção de bug',
            title: 'Bug Fixes',
            emoji: '🐛',
          },
          docs: {
            description: 'Alteração na documentação',
            title: 'Documentation',
            emoji: '📚',
          },
          style: {
            description:
              'Alterações que não afetam o significado do código (espaço em branco, formatação, falta de ponto e vírgula, etc.)',
            title: 'Styles',
            emoji: '💎',
          },
          refactor: {
            description:
              'Uma mudança de código que não corrige um bug nem adiciona um recurso',
            title: 'Code Refactoring',
            emoji: '📦',
          },
          perf: {
            description: 'Uma mudança de código que melhora o desempenho',
            title: 'Performance Improvements',
            emoji: '🚀',
          },
          test: {
            description:
              'Adicionando testes ausentes ou corrigindo testes existentes',
            title: 'Tests',
            emoji: '🚨',
          },
          build: {
            description:
              'Mudanças que afetam o sistema de compilação ou dependências externas (exemplo de escopos: gulp, brócolis, npm)',
            title: 'Builds',
            emoji: '🛠',
          },
          ci: {
            description:
              'Alterações em nossos arquivos e scripts de configuração de CI',
            title: 'Continuous Integrations',
            emoji: '⚙️',
          },
          chore: {
            description:
              'Outras alterações que não modificam arquivos principais ou de teste',
            title: 'Chores',
            emoji: '♻️',
          },
          revert: {
            description: 'Reverte um commit anterior',
            title: 'Reverts',
            emoji: '🗑',
          },
        },
      },
      scope: {
        description:
          'Qual é o escopo desta mudança (por exemplo, nome do componente ou arquivo)',
      },
      subject: {
        description: 'Escreva uma descrição curta e imperativa da mudança',
      },
      body: {
        description: 'Forneça uma descrição mais longa da alteração',
      },
      isBreaking: {
        description: 'Há alguma alteração significativa?',
      },
      breakingBody: {
        description:
          'Um commit BREAKING CHANGE requer um corpo. Por favor insira uma descrição mais longa do commit em si',
      },
      breaking: {
        description: 'Descreva as alterações mais recentes',
      },
      isIssueAffected: {
        description: 'Esta mudança afeta algum problema em aberto?',
      },
      issuesBody: {
        description:
          'Se os problemas forem encerrados, o commit requer um corpo. Por favor insira uma descrição mais longa do commit em si',
      },
      issues: {
        description:
          'Adicionar referências de problemas (por exemplo, card do Jira "GID-0000")',
      },
    },
  },
};
