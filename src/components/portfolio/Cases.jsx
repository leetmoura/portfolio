import AnimatedSection from './AnimatedSection';
import CaseCard from './CaseCard';
import {
  ShieldCheck,
  CheckSquare,
  PaintBucket,
  Package,
  Users,
  FileCheck,
} from 'lucide-react';

const allCases = [
  {
    icon: CheckSquare,
    title: 'Aprovação de Transações',
    tags: ['Banking', 'B2B', 'Workflow'],
    problem: 'Com a criação de perfis distintos (Admin, Gerente, Operador), surgiu a necessidade de controle sobre transações: o usuário Operador não podia executar cash out de forma independente, exigindo aprovação de um nível superior.',
    solution: 'Desenvolveu fluxo completo de aprovação de transações disponível via App Mobile, Web Banking e API, atendendo à demanda dos parceiros por governança financeira sem travar a operação. Inclui otimização do processamento em fila, reduzindo timeouts nas aprovações pendentes.',
    metrics: [
      { value: '+70%', label: 'Volume total em 2 meses de lançamento' },
      { value: '+183%', label: 'Crescimento de Payments em 2 meses' },

    ],
  },
  {
    icon: ShieldCheck,
    title: 'Safe Selfie',
    tags: ['Segurança', 'KYC', 'Compliance'],
    problem: 'Transações de alto valor sem autenticação biométrica, gerando risco operacional e de compliance para parceiros e seus clientes.',
    solution: 'Selfie obrigatória para transações acima de um limite configurável por parceiro, com fluxo integrado ao app mobile. Parceiros personalizam o limite via backoffice.',
    metrics: [
      { value: '~486K', label: 'Transações no período' },
      { value: '35%', label: 'Transações protegidas por selfie' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Aprovação de Selfie — Multiusuários',
    tags: ['KYC', 'Segurança', 'B2B'],
    problem: 'Novos usuários convidados por empresas parceiras eram liberados sem validação de identidade, gerando risco de acessos indevidos e falhas de compliance.',
    solution: 'Fluxo completo de validação: o usuário convidado envia selfie pelo app após o cadastro, e o Admin/Gerente aprova ou recusa pelo Web Banking antes de liberar o acesso à conta.',
    metrics: [
      { value: '23.425', label: 'Usuários totais' },
      { value: '99,80%', label: 'Usuários com selfie cadastrada' },
      { value: '4,8', label: 'CSAT do fluxo' },
    ],
  },
  {
    icon: Users,
    title: 'Multiusuário',
    tags: ['B2B', 'Governança', 'Segurança'],
    problem: 'Empresas parceiras não conseguiam delegar acessos com segurança — todos os usuários operavam com o mesmo nível de permissão, sem rastreabilidade.',
    solution: 'Implementou hierarquia de perfis (Admin, Gerente, Operador, Visualizador) com permissões granulares, trilha de auditoria e fluxos de aprovação. Lançado em nov/24.',
    metrics: [
      { value: '273', label: 'Cadastros no 1º mês' },
      { value: '7.031', label: 'Usuários ativos após 3 meses' },
      { value: '4', label: 'Perfis de acesso' },
    ],
  },
  {
    icon: PaintBucket,
    title: 'Design System — App Bancário',
    tags: ['Design System', 'Mobile', 'UX'],
    problem: 'App com inconsistências visuais, bugs frequentes de UI e baixa velocidade de desenvolvimento de novas telas.',
    solution: 'Liderou a implementação do Design System cobrindo 100% dos fluxos transacionais, unificando componentes e experiência. Também reduzimos o tempo de login de 12s para 3s com melhorias nas APIs e performance.',
    metrics: [
      { value: '25', label: 'Fluxos redesenhados' },
      { value: '12s→3s', label: 'Tempo de login' },
      { value: '100%', label: 'Cobertura de telas' },
    ],
  },
  {
    icon: Package,
    title: 'Transferências em Lote',
    tags: ['B2B', 'Pagamentos', 'Escala'],
    problem: 'Parceiros corporativos precisavam processar centenas de transferências por vez, mas a plataforma não suportava lotes com rastreabilidade e controle adequados.',
    solution: 'Entregou produto completo: migração CSV→XLSX, novas categorias, filtros avançados, download de comprovantes individuais e consolidados.',
    metrics: [
      { value: '-88%', label: 'Redução de falhas em 1 mês' },
      { value: '30→8min', label: 'Tempo por lote (47 transf.)' },
    ],
  },
  {
    icon: FileCheck,
    title: 'DDA — Débito Direto Autorizado',
    tags: ['Pagamentos', 'Banking', 'Automação'],
    problem: 'Usuários precisavam gerenciar e pagar boletos e contas de forma manual, sem uma solução integrada de débito autorizado na plataforma.',
    solution: 'Implementação do fluxo completo de DDA, permitindo adesão, visualização e pagamento autorizado de débitos diretamente pelo app e Web Banking.',
    metrics: [
      { value: 'Mai/26', label: 'Lançamento' },
      { value: '🚀', label: 'Métricas em breve' },
    ],
  },
  {
    icon: ShieldCheck,
    title: 'Segurança & Gestão de Acessos',
    tags: ['Segurança', 'CX', 'Retenção'],
    problem: 'Alto volume de bloqueios de conta por senha e PIN — gerando friction crítica e sobrecarga no suporte dos parceiros.',
    solution: 'Série de melhorias: reset diário do contador, desbloqueio automático pós-redefinição, política de senha simplificada e até 3 trocas/mês.',
    metrics: [
      { value: '-99,7%', label: 'Redução de bloqueios por senha' },
      { value: '-43%', label: 'Redução de bloqueios por PIN' },
    ],
  },
];

export default function Cases() {
  return (
    <AnimatedSection id="cases" className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-widest">
            Cases
          </span>
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mt-3 text-foreground">
            Resultados que<br />
            <span className="text-primary">provam o impacto</span>
          </h2>
          <p className="text-muted-foreground mt-4">Clique em cada card para ver as métricas.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {allCases.map((c, i) => (
            <CaseCard key={c.title} caseData={c} index={i} />
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}