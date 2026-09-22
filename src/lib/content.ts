export type DetailItem = {
  slug: string;
  title: string;
  eyebrow?: string;
  summary: string;
  challenge?: string;
  outcomes?: string[];
  services?: string[];
  sections?: { title: string; body: string }[];
};

export const capabilities: DetailItem[] = [
  {
    slug: 'strategy-transformation',
    title: 'Strategy and Transformation',
    summary: 'Turn ambition into an executable transformation agenda grounded in the organisation’s real operating conditions.',
    challenge: 'Transformation programmes lose coherence when business objectives, operating-model decisions, technology investments and delivery plans are developed separately.',
    outcomes: ['A shared case for change', 'A prioritised transformation portfolio', 'Clear governance and decision rights', 'An executable roadmap with measurable outcomes'],
    services: ['Digital transformation strategy', 'Innovation strategy', 'Enterprise technology strategy', 'Operating-model design', 'Transformation roadmaps', 'Programme strategy'],
  },
  {
    slug: 'ai-data',
    title: 'Artificial Intelligence and Data',
    summary: 'Identify where AI and data can create defensible value, then put the governance, architecture and delivery capability around it.',
    challenge: 'Many organisations have promising AI pilots but unclear ownership, fragmented data, untested risk controls and no dependable path into operations.',
    outcomes: ['A practical AI portfolio', 'Defined governance and risk controls', 'Production-ready use cases', 'Data foundations that support reliable decisions'],
    services: ['AI strategy and readiness', 'Responsible AI', 'Generative AI implementation', 'Workflow AI', 'Data strategy', 'Analytics and predictive modelling', 'AI governance'],
  },
  {
    slug: 'cloud-infrastructure',
    title: 'Cloud and Infrastructure',
    summary: 'Modernise infrastructure around resilience, security, interoperability and sustainable operating cost.',
    challenge: 'Cloud programmes underperform when migration is treated as a technical relocation rather than a change to architecture, security, financial management and ways of working.',
    outcomes: ['A business-led cloud roadmap', 'Modern and supportable architecture', 'Improved operational visibility', 'A stronger platform for product and data teams'],
    services: ['Cloud strategy', 'AWS implementation', 'Microsoft Azure', 'Multi-cloud strategy', 'Cloud migration', 'Infrastructure architecture', 'Cloud optimisation'],
  },
  {
    slug: 'enterprise-platforms',
    title: 'Enterprise Platforms',
    summary: 'Configure and integrate platforms around the work people need to do, rather than forcing the organisation around the software.',
    challenge: 'Enterprise platforms create complexity when process design, integration, data ownership, adoption and governance are addressed too late.',
    outcomes: ['Fit-for-purpose platform design', 'Connected data and workflows', 'Stronger user adoption', 'A controlled path from implementation to optimisation'],
    services: ['Salesforce implementation', 'CRM transformation', 'Microsoft ecosystem implementation', 'Power Platform', 'Dynamics 365', 'ERP modernisation', 'Enterprise integration'],
  },
  {
    slug: 'product-engineering',
    title: 'Product and Software Engineering',
    summary: 'Design and build useful, secure digital products that fit the operating environment and can evolve after launch.',
    challenge: 'Custom technology fails when teams build features before validating the problem, users, service model, architecture and product ownership.',
    outcomes: ['A validated product direction', 'Accessible, usable experiences', 'Maintainable software and integrations', 'An operating model for continuous product improvement'],
    services: ['Digital product strategy', 'Service and UX design', 'Custom software development', 'Web and mobile applications', 'APIs and integrations', 'Product management'],
  },
  {
    slug: 'programme-change-capability',
    title: 'Programme Delivery, Change and Capability',
    summary: 'Create the controls, delivery rhythm and internal capability required to turn a complex programme into sustained adoption.',
    challenge: 'A solution is not implemented when the system goes live. It is implemented when people can use it, leaders can govern it and teams can improve it.',
    outcomes: ['Visible programme health and decisions', 'Coordinated vendors and workstreams', 'Prepared leaders and users', 'Transferred knowledge and internal ownership'],
    services: ['Programme and project management', 'PMO support', 'Implementation governance', 'Benefits realisation', 'Change management', 'Training and knowledge transfer', 'Leadership enablement'],
  },
];

export const solutions: DetailItem[] = [
  { slug: 'digital-transformation', title: 'Digital Transformation', summary: 'Align strategy, operating model, services, data and technology around a measurable transformation agenda.', challenge: 'A portfolio of disconnected projects is not a transformation strategy.', outcomes: ['Clear transformation thesis', 'Sequenced roadmap', 'Accountable governance', 'Delivery and adoption plan'], services: ['Assessment', 'Target state', 'Roadmap', 'Programme mobilisation'] },
  { slug: 'enterprise-ai-adoption', title: 'Enterprise AI Adoption', summary: 'Move high-value AI use cases from experimentation into governed, adopted operations.', challenge: 'Pilots often avoid the data, risk, workflow and ownership decisions required for production.', outcomes: ['Prioritised use cases', 'Responsible AI controls', 'Production architecture', 'Adoption and measurement'], services: ['AI readiness', 'Use-case portfolio', 'Prototype to production', 'Governance'] },
  { slug: 'cloud-transformation', title: 'Cloud Transformation', summary: 'Modernise infrastructure and applications around resilience, security, cost and product velocity.', challenge: 'A migration alone does not create a modern cloud operating model.', outcomes: ['Cloud decision framework', 'Migration waves', 'Platform guardrails', 'Operational handover'], services: ['Cloud assessment', 'Architecture', 'Migration planning', 'Optimisation'] },
  { slug: 'customer-experience', title: 'Customer Experience Transformation', summary: 'Redesign journeys, services and enabling platforms around what customers and staff need to accomplish.', challenge: 'Fragmented channels and internal hand-offs create visible friction for customers.', outcomes: ['Priority journeys', 'Service blueprint', 'Experience roadmap', 'Measurement model'], services: ['Research', 'Journey design', 'Service design', 'Experience technology'] },
  { slug: 'operational-excellence', title: 'Operational Excellence', summary: 'Improve how work flows across teams, policies, systems and decisions before applying automation.', challenge: 'Technology cannot compensate for unclear ownership, duplicated effort or poorly designed controls.', outcomes: ['Visible process performance', 'Simplified workflows', 'Defined controls', 'Continuous improvement capability'], services: ['Process discovery', 'Root-cause analysis', 'Redesign', 'Performance management'] },
  { slug: 'intelligent-workflow-automation', title: 'Intelligent Workflow Automation', summary: 'Combine process redesign, rules, integration and AI to reduce friction while preserving control.', challenge: 'Automating a broken workflow makes problems move faster.', outcomes: ['Automation portfolio', 'Human-in-the-loop design', 'Integrated workflows', 'Benefit tracking'], services: ['Opportunity assessment', 'Workflow design', 'Automation build', 'Monitoring'] },
  { slug: 'data-analytics-transformation', title: 'Data and Analytics Transformation', summary: 'Build trusted data products and decision practices around the questions leaders and teams need to answer.', challenge: 'Reporting proliferates when definitions, ownership and decision use are unclear.', outcomes: ['Shared data priorities', 'Governed metrics', 'Useful analytics products', 'Improved decision cadence'], services: ['Data strategy', 'Data platform design', 'Analytics', 'Governance'] },
  { slug: 'platform-modernisation', title: 'Enterprise Platform Modernisation', summary: 'Modernise CRM, workflow and enterprise platforms without losing sight of processes, data and users.', challenge: 'Platform replacement carries operational risk when the organisation treats configuration as the whole programme.', outcomes: ['Platform roadmap', 'Integration architecture', 'Migration and controls', 'Adopted workflows'], services: ['Platform assessment', 'Selection support', 'Implementation', 'Optimisation'] },
  { slug: 'digital-product-development', title: 'Digital Product Development', summary: 'Take a validated service or product opportunity from discovery through launch and continuous improvement.', challenge: 'Products fail when teams optimise delivery velocity before product-market and user fit.', outcomes: ['Evidence-backed product direction', 'Working product increments', 'Secure architecture', 'Product operating model'], services: ['Product discovery', 'UX and service design', 'Engineering', 'Product management'] },
  { slug: 'programme-recovery', title: 'Technology Programme Recovery', summary: 'Restore clarity, confidence and delivery control to critical programmes that are drifting or blocked.', challenge: 'Delayed programmes usually have interacting issues across scope, decisions, dependencies, suppliers and adoption.', outcomes: ['Independent health view', 'Recovery priorities', 'Reset governance', 'Credible integrated plan'], services: ['Programme diagnostic', 'Recovery design', 'Delivery control', 'Executive reporting'] },
  { slug: 'change-adoption', title: 'Organisational Change and Adoption', summary: 'Prepare the organisation to adopt new processes, roles, decisions and technology with confidence.', challenge: 'Communication activity cannot replace practical readiness, role clarity and supported behaviour change.', outcomes: ['Stakeholder alignment', 'Role-based readiness', 'Adoption support', 'Internal change capability'], services: ['Change strategy', 'Stakeholder engagement', 'Training', 'Capability transfer'] },
];

export const industries: DetailItem[] = [
  {
    slug: 'healthcare-life-sciences', title: 'Healthcare and Life Sciences',
    summary: 'Modernise care, operations and health data around safety, interoperability, staff workflow and patient experience.',
    challenge: 'Healthcare transformation must work across clinical, operational, technical, regulatory and human constraints at the same time.',
    outcomes: ['Connected clinical and operational workflows', 'Safer, more usable digital services', 'Interoperable data exchange', 'Stronger delivery and adoption capability'],
    services: ['EHR/EMR advisory and optimisation', 'HL7/FHIR integration', 'Telehealth and virtual care', 'Patient engagement portals', 'Population health analytics', 'AI-assisted documentation', 'Revenue-cycle automation', 'Healthcare CRM', 'Public-health technology'],
    sections: [
      { title: 'Advisory', body: 'Assess clinical and operational priorities, technology landscape, readiness, data constraints and programme risks.' },
      { title: 'Implementation', body: 'Translate the roadmap into governed workstreams, configurations, products, integrations and release plans.' },
      { title: 'Integration', body: 'Design secure interfaces, data flows and interoperability patterns suited to the health information environment.' },
      { title: 'Optimisation', body: 'Measure adoption and workflow performance, address friction and build internal improvement capability.' },
    ],
  },
  {
    slug: 'financial-services', title: 'Financial Services',
    summary: 'Modernise customer, compliance and operational capabilities in an environment where trust, control and resilience are central.',
    challenge: 'Financial-services transformation must improve speed and experience without weakening governance or operational control.',
    outcomes: ['Simpler customer and staff journeys', 'Traceable controls', 'Connected data and platforms', 'Responsible AI adoption'],
    services: ['Digital banking transformation', 'CRM', 'RegTech platforms', 'Workflow automation', 'Data and analytics', 'Cloud transformation', 'Customer-service platforms', 'AI-enabled operations'],
  },
  {
    slug: 'government-public-sector', title: 'Government and Public Sector',
    summary: 'Design reliable, accessible public services that work for residents, staff, policy teams and programme leaders.',
    challenge: 'Public services often span agencies, legacy systems, policy requirements and populations with very different access needs.',
    outcomes: ['Citizen-centred service design', 'Accessible digital channels', 'Modern case and workflow capability', 'Better programme visibility'],
    services: ['Citizen identity and access', 'Case management', 'Citizen service portals', 'Public-health IT', 'Social-services IT', 'Government CRM', 'Cloud modernisation', 'Data and analytics', 'Programme management'],
  },
  {
    slug: 'technology', title: 'Technology',
    summary: 'Help technology organisations make sharper product, platform and operating decisions as they scale.',
    challenge: 'Growth exposes gaps in product strategy, architecture, delivery systems, customer experience and operating discipline.',
    outcomes: ['Clear product portfolio choices', 'Scalable platforms and teams', 'Improved product delivery', 'More coherent customer experience'],
    services: ['Product strategy', 'Product development', 'AI implementation', 'Cloud architecture', 'Enterprise platforms', 'Programme delivery', 'Operational scaling'],
  },
  {
    slug: 'agriculture-agtech', title: 'Agriculture and AgTech',
    summary: 'Build digital infrastructure that helps agricultural programmes, producers, markets and decision-makers work with better information.',
    challenge: 'Agricultural technology must accommodate field realities, fragmented data, connectivity limits and diverse participant incentives.',
    outcomes: ['Usable farmer and field services', 'Stronger programme data', 'Connected market workflows', 'Scalable digital programme operations'],
    services: ['Farmer-service platforms', 'Market-access technology', 'Programme management', 'Agricultural data platforms', 'AI applications', 'Digital extension services', 'Supply-chain optimisation'],
  },
  {
    slug: 'education-social-impact', title: 'Education and Social Impact',
    summary: 'Strengthen mission-led programmes with practical digital infrastructure, measurement and delivery capability.',
    challenge: 'Mission-critical programmes often depend on fragmented tools, manual coordination and reporting that is disconnected from decisions.',
    outcomes: ['More coherent programme operations', 'Better participant and grant data', 'Usable learning and service platforms', 'Sustainable internal capability'],
    services: ['Learning and student platforms', 'Administrative workflow automation', 'Grant and programme operations', 'Beneficiary management', 'Monitoring and data platforms', 'Digital public goods', 'Innovation strategy'],
  },
];

export const products: DetailItem[] = [
  {
    slug: 'hacey-pulse', title: 'HACEY Pulse', eyebrow: 'Representative product concept',
    summary: 'A programme and portfolio intelligence workspace for leaders managing complex, multi-partner delivery.',
    challenge: 'Programme leaders lack one trusted view of milestones, risks, decisions, benefits and partner commitments.',
    outcomes: ['Connected programme view', 'Decision and risk traceability', 'Outcome tracking', 'Role-based executive reporting'],
    services: ['Portfolio dashboards', 'Milestone and dependency tracking', 'Risk, issue and decision logs', 'Benefits registers', 'Data connectors and exports'],
    sections: [{ title: 'Target customer', body: 'Transformation offices, programme leaders, government portfolios, foundations and multi-partner delivery organisations.' }, { title: 'Deployment', body: 'Cloud-hosted or client-managed deployment, configured around the organisation’s delivery model.' }, { title: 'Integrations', body: 'Designed to connect with Microsoft 365, Power BI, CRM, project tools and enterprise APIs.' }, { title: 'Security', body: 'Role-based access, audit trails, encryption and client-specific retention controls would be defined during solution design.' }],
  },
  {
    slug: 'hacey-nexus', title: 'HACEY Nexus', eyebrow: 'Representative accelerator concept',
    summary: 'An AI knowledge assistant that helps teams find, interpret and apply governed organisational knowledge.',
    challenge: 'Important policies, decisions and expertise are dispersed across documents, repositories and individual memory.',
    outcomes: ['Faster trusted answers', 'Cited source retrieval', 'Controlled knowledge access', 'Reduced duplication'],
    services: ['Enterprise search', 'Retrieval with citations', 'Knowledge curation', 'Feedback and evaluation', 'Usage analytics'],
    sections: [{ title: 'Target customer', body: 'Enterprises, health systems, public agencies and mission-led organisations with dispersed governed knowledge.' }, { title: 'Deployment', body: 'Private cloud deployment with model and repository choices shaped around risk and existing technology.' }, { title: 'Integrations', body: 'Potential connectors include SharePoint, Microsoft 365, Google Drive, service platforms and approved data repositories.' }, { title: 'Security', body: 'Permission-aware retrieval, prompt and response logging, sensitive-data controls and evaluation are core design requirements.' }],
  },
  {
    slug: 'hacey-care', title: 'HACEY Care', eyebrow: 'Representative product concept',
    summary: 'A configurable patient engagement layer for access, navigation, communication and care-programme participation.',
    challenge: 'Patients and service teams navigate disconnected communication, appointment, education and follow-up processes.',
    outcomes: ['Clearer patient journeys', 'Consistent programme communication', 'Improved service visibility', 'Interoperable engagement workflows'],
    services: ['Patient portal modules', 'Appointment and follow-up workflows', 'Care content', 'Secure messaging', 'Programme analytics'],
    sections: [{ title: 'Target customer', body: 'Health systems, care programmes, public-health organisations and digital health service teams.' }, { title: 'Deployment', body: 'Modular web and mobile deployment designed around the care setting and compliance requirements.' }, { title: 'Integrations', body: 'Potential integration with EHR/EMR, FHIR APIs, CRM, identity and messaging services.' }, { title: 'Security', body: 'Privacy-by-design, consent, identity, auditability and minimum-necessary access would be validated for each environment.' }],
  },
  {
    slug: 'hacey-caseflow', title: 'HACEY CaseFlow', eyebrow: 'Representative accelerator concept',
    summary: 'A configurable case and compliance workflow foundation for public service, social programme and regulated operations.',
    challenge: 'Case work is slowed by fragmented intake, manual routing, limited status visibility and inconsistent documentation.',
    outcomes: ['Structured intake and eligibility', 'Visible case progress', 'Policy-based routing', 'Auditable decisions and reporting'],
    services: ['Intake forms', 'Case workflows', 'Task and document management', 'Rules and approvals', 'Service and compliance reporting'],
    sections: [{ title: 'Target customer', body: 'Government agencies, social-service providers, compliance teams and grant or programme operators.' }, { title: 'Deployment', body: 'Configurable cloud deployment with phased process migration.' }, { title: 'Integrations', body: 'Identity, CRM, document, payment, notification and government data interfaces as required.' }, { title: 'Security', body: 'Segregation of duties, audit history, data classification and retention must be configured to the operating context.' }],
  },
];

export const technologies = [
  { title: 'Microsoft ecosystem', copy: 'Implementation capability across Azure, Microsoft 365, Power Platform and Dynamics 365 for cloud, collaboration, workflow, data and CRM needs.' },
  { title: 'Amazon Web Services', copy: 'Solutions built with AWS services for cloud-native applications, data platforms, integration, security and resilient infrastructure.' },
  { title: 'Salesforce', copy: 'CRM and workflow implementation capability spanning discovery, service design, configuration, integration, adoption and optimisation.' },
  { title: 'Open enterprise architecture', copy: 'Cloud-native patterns, APIs, interoperability standards, data platforms and enterprise AI technologies selected to fit the organisation.' },
];

export type Article = {
  slug: string;
  title: string;
  category: string;
  dek: string;
  readingTime: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
};

export const articles: Article[] = [
  {
    slug: 'enterprise-ai-readiness', category: 'Artificial Intelligence', readingTime: '7 min read',
    title: 'Enterprise AI readiness is an operating question, not a model question',
    dek: 'A practical readiness review should expose whether the organisation can own, govern, integrate and improve AI in real workflows.',
    sections: [
      { title: 'Executive summary', paragraphs: ['AI readiness is often reduced to data availability or technical maturity. Those matter, but they are not enough. A production AI capability also needs a valuable workflow, an accountable owner, acceptable risk, user trust, integration with existing systems and a method for monitoring performance after launch.', 'The most useful readiness assessment therefore starts with decisions and work. It asks where better prediction, generation, retrieval or automation could materially improve an outcome, then tests whether the organisation can implement that change responsibly.'] },
      { title: 'Start with the operating problem', paragraphs: ['A use case should name the decision or task being improved, the people involved, the current failure mode and the consequence of getting the answer wrong. “Deploy a copilot” is not a use case. “Reduce the time service agents spend locating approved policy answers while preserving source traceability” is.', 'This framing prevents technology enthusiasm from masking weak business logic. It also gives leaders a basis for comparing opportunities across functions.'] },
      { title: 'Assess the full production system', paragraphs: ['Readiness spans six connected dimensions: value, workflow, data, technology, risk and ownership. Weakness in any one can stop a promising pilot from becoming dependable operational capability.', 'The assessment should examine data provenance and access, integration paths, model or vendor constraints, security and privacy, human review, failure handling, measurement, change impact and who has the authority to improve or stop the system.'], bullets: ['Value: a measurable operational or service outcome', 'Workflow: a defined role for people and AI', 'Data: lawful, accessible and fit-for-purpose inputs', 'Technology: supportable architecture and integration', 'Risk: controls proportionate to consequence', 'Ownership: accountable product and operational leaders'] },
      { title: 'Prioritise a balanced portfolio', paragraphs: ['The best first use case is rarely the largest theoretical prize. It is usually an important, bounded workflow where the organisation can learn safely and show a credible result. Balance value against feasibility, risk and learning potential.', 'A portfolio should include quick operational improvements and a smaller number of foundational moves, such as governed knowledge, data products or identity controls, that unlock later use cases.'] },
      { title: 'Questions for leaders', paragraphs: ['Before approving an AI initiative, ask whether the outcome owner is named, what evidence will demonstrate improvement, what happens when the system is uncertain, how users will challenge an output, and which team owns monitoring after launch.', 'Readiness is not a one-time gate. It is the organisation’s ability to make these decisions repeatedly as technology, regulation, workflows and risk tolerance change.'] },
    ],
  },
  {
    slug: 'from-ai-pilot-to-operations', category: 'Artificial Intelligence', readingTime: '8 min read',
    title: 'Moving from AI pilot to operational deployment',
    dek: 'The work between a persuasive demonstration and a dependable service is where most of the real transformation happens.',
    sections: [
      { title: 'Executive summary', paragraphs: ['A pilot proves that an idea can work under selected conditions. Operational deployment proves that the organisation can run it safely, repeatedly and economically in the real environment. The gap includes integration, data quality, risk control, support, adoption, measurement and ownership.', 'Teams close that gap faster when they treat AI as a product and operating-model change rather than a hand-off from a data-science team.'] },
      { title: 'Define the production promise', paragraphs: ['Specify who the service is for, the task it supports, expected response time, acceptable error, required evidence, escalation routes and business outcome. This becomes the shared contract between product, operational, technical and risk teams.', 'Without that contract, teams optimise model performance while users judge usefulness, compliance judges control and operations judges reliability. The programme accumulates disagreement rather than evidence.'] },
      { title: 'Design human control deliberately', paragraphs: ['Human review should not be added as a vague safety statement. Define which outputs require approval, which users have the competence and time to review them, what evidence they see and how corrections are captured.', 'High-consequence use cases may need conservative thresholds, independent checks or restricted scope. Lower-consequence uses may support more automation. The control should reflect the actual impact of error.'] },
      { title: 'Build the operating envelope', paragraphs: ['Production readiness includes observability, incident handling, version control, security testing, cost monitoring, evaluation datasets, data retention and supplier contingencies. It also includes training, workflow changes and support for users who encounter failure.', 'Measure quality in the context of the workflow: task completion, rework, time, user confidence, exceptions and downstream outcomes. A single model score rarely represents service performance.'] },
      { title: 'Use staged deployment', paragraphs: ['Move through controlled stages: internal testing, limited users, parallel operation, bounded release and wider adoption. Establish entry and exit criteria for every stage. A stage should end because evidence supports the decision, not because the programme calendar says so.', 'At each stage, capture what changed in the model, prompt, data, interface, policy or workflow. This record makes learning auditable and supports safer scaling.'] },
      { title: 'Questions for leaders', paragraphs: ['Who owns the service after the pilot team leaves? What is the rollback plan? Which metric would cause us to pause deployment? Are users rewarded and resourced to use the new workflow? Can we explain which data and model version produced a material output?', 'A credible production plan answers these questions before scale.'] },
    ],
  },
  {
    slug: 'digital-transformation-beyond-technology', category: 'Digital Transformation', readingTime: '7 min read',
    title: 'Digital transformation beyond technology',
    dek: 'A transformation succeeds when operating decisions, services, technology and capability change as one system.',
    sections: [
      { title: 'Executive summary', paragraphs: ['Technology is often the most visible part of a transformation, but it is rarely the only source of delay or value. The real work crosses strategy, process, policy, data, roles, incentives, supplier relationships and management routines.', 'Leaders should define transformation through the outcomes and capabilities the organisation needs, then make technology choices in that context.'] },
      { title: 'Diagnose before selecting', paragraphs: ['A slow service may reflect duplicate approvals, unclear eligibility, poor information at intake or hand-offs between teams. Replacing the case system without addressing these causes can reproduce the delay in a newer interface.', 'Discovery should combine executive objectives with process evidence, user research, system constraints and performance data. The goal is a shared view of the problem and the decisions needed, not a long catalogue of pain points.'] },
      { title: 'Treat the operating model as a design output', paragraphs: ['New technology changes who can see information, who makes decisions, which tasks disappear and which capabilities become important. Those changes should be designed explicitly.', 'Define product ownership, service management, data accountability, funding, controls and continuous improvement before go-live. Otherwise the programme delivers a system without the organisational mechanism to sustain it.'] },
      { title: 'Sequence for learning and value', paragraphs: ['Large transformations need a coherent target state, but they should not wait years to test assumptions. Organise the roadmap around useful service or capability increments that produce evidence and reduce risk.', 'Every increment should deliver a working change, a measurable outcome and a stronger reusable capability. This approach links near-term delivery to long-term architecture.'] },
      { title: 'Measure adoption as performance', paragraphs: ['Login counts and training completion are weak proxies for adoption. Measure whether people can complete the new workflow, whether exceptions fall, whether decisions improve and whether customers experience the intended change.', 'Adoption data should shape the backlog. It is not a post-implementation report; it is an input to product and service improvement.'] },
      { title: 'Questions for leaders', paragraphs: ['Which operating constraint will remain even if the technology works perfectly? Who owns the service outcome? What capability should be stronger inside the organisation at the end? How will we know that the change has become normal work?', 'Transformation becomes credible when the programme can answer these in concrete terms.'] },
    ],
  },
  {
    slug: 'process-improvement-before-automation', category: 'Process Improvement', readingTime: '6 min read',
    title: 'Improve the process before you automate it',
    dek: 'Automation creates value when it removes avoidable work from a sound service, not when it hides unresolved design problems.',
    sections: [
      { title: 'Executive summary', paragraphs: ['Automation can reduce manual effort, improve consistency and shorten cycle time. It can also hard-code duplication, increase exception queues and make an opaque process harder to challenge.', 'A short process diagnostic before automation helps teams distinguish necessary controls from historical workarounds and find the smallest change that improves the outcome.'] },
      { title: 'Map the real process', paragraphs: ['Document what happens in practice, including unofficial spreadsheets, email approvals, repeated data entry, waiting, rework and escalation. Policy documents and standard operating procedures describe intent; observation and transaction evidence reveal the service.', 'Map the customer or case journey alongside the internal flow. A step that looks efficient inside one team may create delay or confusion elsewhere.'] },
      { title: 'Find the cause, not only the task', paragraphs: ['A manual review may exist because upstream data is incomplete. Automating the review will not fix input quality. A routing bot may move work faster, but not resolve unclear ownership.', 'Use root-cause analysis to separate demand, failure demand, policy, control, data and technology issues. This changes the automation backlog from a list of tasks into a set of service decisions.'] },
      { title: 'Simplify and control', paragraphs: ['Remove steps that do not change the outcome, combine duplicate checks, clarify decision rules and define exception paths. Then decide which work should be automated, augmented or kept human.', 'Controls should remain visible. Teams need to know why a decision was made, how to override it and how to identify systematic errors.'] },
      { title: 'Measure the whole service', paragraphs: ['Track end-to-end cycle time, first-time quality, exception rate, cost to serve, user effort and outcome. A local time saving can be misleading if it shifts work to another team or creates more corrections.', 'Review results after deployment and maintain a process owner. Automation is a product that requires monitoring as volume, policy and behaviour change.'] },
      { title: 'Questions for leaders', paragraphs: ['Would we keep this step if the current system did not exist? What problem is the control preventing? Where does incomplete information enter the process? Who owns exceptions after automation?', 'These questions protect the organisation from scaling its own friction.'] },
    ],
  },
  {
    slug: 'healthcare-interoperability-practical', category: 'Healthcare', readingTime: '8 min read',
    title: 'Healthcare interoperability: begin with the care and operational decision',
    dek: 'Standards make exchange possible. Useful interoperability begins with the workflow, meaning and responsibility around the data.',
    sections: [
      { title: 'Executive summary', paragraphs: ['Healthcare interoperability programmes can become lists of interfaces. A better starting point is the decision, transition or task that improved information should support: medication reconciliation, referral closure, public-health reporting, patient access or care-management outreach.', 'The programme can then define the information, timing, terminology, identity, consent and accountability required to make that workflow reliable.'] },
      { title: 'Define the use case precisely', paragraphs: ['Name the actors, event, source systems, receiving workflow and expected action. Specify the consequence of missing, delayed or ambiguous data. This turns “connect the systems” into a testable service outcome.', 'Prioritise use cases by clinical or operational value, feasibility and risk. A technically simple exchange may deliver little value if nobody owns the downstream action.'] },
      { title: 'Separate transport from meaning', paragraphs: ['APIs and messaging standards address how data moves. Semantic interoperability addresses whether systems and people interpret it consistently. Both matter.', 'Establish the relevant profiles, code systems, data quality rules and mapping decisions. Test with real-world variation rather than ideal examples. Maintain the mapping and terminology process as versions change.'] },
      { title: 'Design identity, consent and access', paragraphs: ['Patient matching, provider identity, authorisation and consent are part of the workflow architecture. They should not be treated as late security tasks.', 'Define minimum-necessary access, audit requirements, break-glass scenarios, data provenance and how users resolve uncertain matches. The design should make the safe action the easy action.'] },
      { title: 'Test the operational loop', paragraphs: ['A successful message is not the same as a successful service. Confirm that the data appears in the right place, is understandable, reaches the right role, triggers the intended action and closes the loop.', 'Monitor interface reliability and workflow outcomes together. Include frontline staff in testing because they see timing, context and usability problems that technical validation cannot expose.'] },
      { title: 'Questions for leaders', paragraphs: ['What action should this data enable? Who is accountable for acting? How will users judge provenance and freshness? What happens when identity or terminology is uncertain? Which outcome proves that the exchange matters?', 'Interoperability creates value when the answer reaches the work at the moment it is needed.'] },
    ],
  },
];

export const approachStages = [
  ['Understand', 'Align on objectives, stakeholders, operating context, evidence and constraints.'],
  ['Diagnose', 'Identify root causes, dependencies, risks and the decisions that matter most.'],
  ['Design', 'Co-design the target service, operating model, technology, roadmap and measures.'],
  ['Build', 'Configure, engineer and integrate in useful increments with continuous validation.'],
  ['Deploy', 'Release safely, migrate deliberately and manage operational readiness.'],
  ['Enable', 'Equip leaders, teams and users with the skills, tools and decision rights to own the change.'],
  ['Optimise', 'Measure performance, learn from use and improve the solution and operating system.'],
];
