export interface Project {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  category: "EMBEDDED" | "NETWORKING" | "MACHINE LEARNING" | "ALGORITHMS";
  year: string;
  summary: string;
  problem: string;
  approach: string;
  implementation: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  accentColor: string;
  status: "ACTIVE LAB RESEARCH" | "PROTOTYPE" | "COMPLETED STUDY";
}

export interface AcademicArea {
  id: string;
  code: string;
  title: string;
  domain: string;
  topics: string[];
  application: string;
  badge: string;
}

export interface SkillItem {
  name: string;
  category: "languages" | "tools" | "concepts" | "technologies";
  level: "Advanced" | "Proficient" | "Core Focus" | "Active";
  highlight?: boolean;
  desc: string;
  ecosystem: string[];
}

export const PORTFOLIO_DATA = {
  personal: {
    fullName: "KENAZ MATHUKUTTY",
    firstName: "KENAZ",
    lastName: "MATHUKUTTY",
    tagline: "Computer Science / Computer Engineering Student",
    subTagline: "Low-level Systems · Network Topology · Silicon Micro-Architectures",
    institution: "St. Joseph's College of Engineering and Technology, Palai (SJCET)",
    location: "Kerala, India",
    coordinates: "09°35' N 76°43' E",
    currentTerm: "5th Semester B.Tech",
    email: "kenazmathukutty@gmail.com",
    phone: "+91 9XXXXXXXXX",
    githubUrl: "https://github.com/kenaz-mathukutty",
    githubHandle: "kenaz-mathukutty",
    linkedinUrl: "https://linkedin.com/in/kenaz-mathukutty",
    linkedinHandle: "kenaz-mathukutty",
    cvDownloadLabel: "DOWNLOAD CV [PDF]",
    careerObjective:
      "Motivated and enthusiastic engineering student seeking opportunities to develop technical skills, gain practical experience, and contribute to real-world projects. Interested in computer science, software development, networking, and emerging technologies, with a strong willingness to learn and improve.",
    motto: "Better Skills, Bigger Dreams",
    signoff: "Keep Going",
    editorialStatement:
      "I BUILD AT THE INTERSECTION OF LOW-LEVEL HARDWARE, NETWORK ARCHITECTURES, AND DETERMINISTIC COMPUTATIONAL SYSTEMS.",
  },

  education: [
    {
      period: "2023 — PRESENT",
      degree: "B.Tech — Computer Science / Computer Engineering",
      institution: "St. Joseph's College of Engineering and Technology, Palai (SJCET)",
      board: "APJ Abdul Kalam Technological University (KTU)",
      status: "Currently Pursuing — 5th Semester",
      focus: [
        "Embedded Systems & ARM Cortex-M Microcontrollers",
        "Computer Networking, OSI Protocol Architecture, TCP/IP",
        "Data Structures, Algorithm Analysis & Optimization",
        "Database Management Systems & Operating Systems",
      ],
      location: "Palai, Kottayam, Kerala",
      badge: "UNDERGRADUATE",
      highlight: true,
    },
    {
      period: "2021 — 2023",
      degree: "Higher Secondary Education (Class XI & XII)",
      institution: "Kerala State Board",
      board: "Board of Higher Secondary Education, Kerala",
      status: "Completed",
      focus: ["Physics", "Chemistry", "Mathematics", "Computer Science"],
      location: "Kerala, India",
      badge: "HSE",
      highlight: false,
    },
    {
      period: "2019 — 2021",
      degree: "Secondary Education (SSLC / Class X)",
      institution: "Kerala State Board",
      board: "General Education Department, Kerala",
      status: "Completed with Distinction",
      focus: ["Foundational Sciences", "Mathematics", "Information Technology"],
      location: "Kerala, India",
      badge: "SSLC",
      highlight: false,
    },
  ],

  languages: [
    { name: "English", proficiency: "Fluent", level: "Professional Working Proficiency" },
    { name: "Malayalam", proficiency: "Native", level: "Mother Tongue" },
  ],

  skillsByCategory: {
    languages: [
      {
        name: "Python",
        category: "languages",
        level: "Core Focus",
        highlight: true,
        desc: "Algorithmic scripting, machine learning data preparation, automation, and socket networking.",
        ecosystem: ["Data Analysis", "NumPy", "Jupyter", "Socket API"],
      },
      {
        name: "Java",
        category: "languages",
        level: "Core Focus",
        highlight: true,
        desc: "Object-oriented software development, enterprise foundations, multithreading, and abstract data types.",
        ecosystem: ["OOP Paradigm", "Collections API", "JVM", "Eclipse IDE"],
      },
      {
        name: "C",
        category: "languages",
        level: "Core Focus",
        highlight: true,
        desc: "Low-level systems programming, pointer mechanics, direct hardware manipulation, and memory layouts.",
        ecosystem: ["Pointers", "Memory Alloc", "Embedded C", "GCC"],
      },
      {
        name: "JavaScript",
        category: "languages",
        level: "Proficient",
        highlight: false,
        desc: "Event-driven asynchronous web logic, interactive DOM manipulation, and modern web application layers.",
        ecosystem: ["ES6+", "Async/Await", "DOM API", "Web APIs"],
      },
      {
        name: "HTML",
        category: "languages",
        level: "Proficient",
        highlight: false,
        desc: "Semantic document structuring, accessible markup hierarchies, and modern web standards.",
        ecosystem: ["Semantic Tags", "SEO Structures", "DOM Tree"],
      },
      {
        name: "CSS",
        category: "languages",
        level: "Proficient",
        highlight: false,
        desc: "Responsive grid layouts, flexbox architecture, CSS custom properties, and fluid typography.",
        ecosystem: ["Grid", "Flexbox", "Responsive Design", "Transitions"],
      },
    ] as SkillItem[],

    tools: [
      {
        name: "VS Code",
        category: "tools",
        level: "Advanced",
        highlight: true,
        desc: "Primary IDE configured with custom toolchains for C/C++, Python virtual environments, and Web debugging.",
        ecosystem: ["IntelliSense", "Debugger", "Extensions", "Remote SSH"],
      },
      {
        name: "Git",
        category: "tools",
        level: "Core Focus",
        highlight: true,
        desc: "Version control lifecycle, distributed branch management, merge conflict resolution, and history hygiene.",
        ecosystem: ["CLI", "Branching", "Rebasing", "Stashing"],
      },
      {
        name: "GitHub",
        category: "tools",
        level: "Core Focus",
        highlight: true,
        desc: "Repository hosting, collaborative code reviews, issue tracking, and software project maintenance.",
        ecosystem: ["Open Source", "PRs", "Releases", "Gists"],
      },
      {
        name: "Jupyter Notebook",
        category: "tools",
        level: "Proficient",
        highlight: false,
        desc: "Interactive algorithmic exploration, data visualization pipelines, and machine learning experimentation.",
        ecosystem: ["IPython", "Dataframes", "Matplotlib", "Markdown Docs"],
      },
      {
        name: "Eclipse",
        category: "tools",
        level: "Proficient",
        highlight: false,
        desc: "Java workspace development, debugging Java runtime environments, and package orchestration.",
        ecosystem: ["Java Debugger", "Class Path", "Build Config"],
      },
    ] as SkillItem[],

    concepts: [
      {
        name: "Data Structures & Algorithms",
        category: "concepts",
        level: "Core Focus",
        highlight: true,
        desc: "Arrays, Linked Lists, Stacks, Queues, Trees, Hash Tables, and algorithmic complexity analysis (Big-O notation).",
        ecosystem: ["Complexity Analysis", "Recursion", "Sorting & Searching", "Graph Traversal"],
      },
      {
        name: "Object-Oriented Programming (OOP)",
        category: "concepts",
        level: "Core Focus",
        highlight: true,
        desc: "Encapsulation, inheritance, polymorphism, abstraction, and clean architectural design patterns.",
        ecosystem: ["Design Patterns", "SOLID", "Interfaces", "Polymorphism"],
      },
      {
        name: "Database Management Systems (DBMS)",
        category: "concepts",
        level: "Proficient",
        highlight: false,
        desc: "Relational schema design, normalization, ACID transactions, and SQL query optimization.",
        ecosystem: ["SQL", "Schema Normalization", "Relational Algebra", "Indexes"],
      },
      {
        name: "Operating Systems",
        category: "concepts",
        level: "Core Focus",
        highlight: true,
        desc: "Process scheduling, thread synchronization, memory management, virtual memory, and file systems.",
        ecosystem: ["Concurrency", "Paging", "Deadlocks", "POSIX Semantics"],
      },
    ] as SkillItem[],

    technologies: [
      {
        name: "Computer Networking",
        category: "technologies",
        level: "Core Focus",
        highlight: true,
        desc: "In-depth knowledge of TCP/IP protocol suite, socket programming, routing protocols, and packet headers.",
        ecosystem: ["TCP/IP", "Socket API", "Routing", "Subnetting"],
      },
      {
        name: "Embedded Systems",
        category: "technologies",
        level: "Core Focus",
        highlight: true,
        desc: "Microcontroller architecture, memory-mapped I/O, timer interrupts, GPIO configuration, and peripheral buses.",
        ecosystem: ["Microcontrollers", "GPIO", "UART", "SPI", "I2C"],
      },
      {
        name: "ARM Cortex-M",
        category: "technologies",
        level: "Core Focus",
        highlight: true,
        desc: "32-bit RISC ARM Cortex-M micro-architecture, NVIC interrupt controllers, register manipulation, and embedded C firmware.",
        ecosystem: ["Cortex-M3/M4", "NVIC", "SysTick", "Assembly/C", "Bare Metal"],
      },
      {
        name: "Machine Learning",
        category: "technologies",
        level: "Active",
        highlight: false,
        desc: "Supervised classification algorithms, regression models, feature extraction, and predictive inference pipelines.",
        ecosystem: ["Classification", "Feature Prep", "Model Evaluation", "Scikit Patterns"],
      },
    ] as SkillItem[],
  },

  academicAreas: [
    {
      id: "acad-01",
      code: "ACAD // 01",
      title: "Computer Networking & TCP/IP",
      domain: "NETWORKS & SYSTEMS",
      topics: ["TCP Handshakes", "UDP Transmission", "IP Addressing & Subnetting", "Flow & Congestion Control", "DNS & HTTP"],
      application: "Architecture of high-reliability packet routing and socket-level network software.",
      badge: "CORE CURRICULUM",
    },
    {
      id: "acad-02",
      code: "ACAD // 02",
      title: "OSI Model & Network Configuration",
      domain: "SYSTEM ARCHITECTURE",
      topics: ["7-Layer OSI Stack", "Data Link Encapsulation", "MAC Switching", "VLANs", "Network Troubleshooting"],
      application: "Deterministic diagnostic analysis of end-to-end packet transmission across physical and logical boundaries.",
      badge: "KTU SYLLABUS",
    },
    {
      id: "acad-03",
      code: "ACAD // 03",
      title: "Data Structures & Algorithms",
      domain: "COMPUTATIONAL THEORY",
      topics: ["Linear & Non-linear Structures", "Tree Balancing", "Graph Traversals", "Dynamic Programming", "Asymptotic Analysis"],
      application: "Foundation for writing high-performance, low-latency, memory-efficient software systems.",
      badge: "FOUNDATION",
    },
    {
      id: "acad-04",
      code: "ACAD // 04",
      title: "ARM Cortex-M Microcontrollers",
      domain: "SILICON & EMBEDDED",
      topics: ["Cortex-M Core Architecture", "NVIC Interrupt Vector Table", "Memory-Mapped Registers", "DMA Channels", "SysTick Timer"],
      application: "Bare-metal firmware engineering and deterministic real-time hardware execution.",
      badge: "HARDWARE",
    },
    {
      id: "acad-05",
      code: "ACAD // 05",
      title: "Embedded Systems Architecture",
      domain: "HARDWARE-SOFTWARE INTERFACE",
      topics: ["UART / SPI / I2C Protocols", "Analog-to-Digital Conversion (ADC)", "Pulse Width Modulation (PWM)", "Interrupt Handling"],
      application: "Interfacing sensory silicon with computational controllers for automation and instrumentation.",
      badge: "SYSTEMS",
    },
    {
      id: "acad-06",
      code: "ACAD // 06",
      title: "Machine Learning & Classification",
      domain: "APPLIED INTELLIGENCE",
      topics: ["Supervised Classifiers", "Decision Trees & KNN", "Hyperplane Optimization", "Cross-Validation", "Confusion Matrices"],
      application: "Training predictive models on telemetry sensor streams and structured datasets.",
      badge: "INTELLIGENCE",
    },
    {
      id: "acad-07",
      code: "ACAD // 07",
      title: "Software Project Management",
      domain: "ENGINEERING PROCESS",
      topics: ["Agile & Waterfall Lifecycles", "Requirement Specifications", "Git Versioning Hygiene", "Risk Mitigation", "QA Protocols"],
      application: "Rigorous planning and collaborative delivery of maintainable engineering software artifacts.",
      badge: "MANAGEMENT",
    },
    {
      id: "acad-08",
      code: "ACAD // 08",
      title: "Programming Fundamentals",
      domain: "CORE METHODOLOGY",
      topics: ["Structured Programming in C", "Memory Pointers & Arrays", "Procedural Modularization", "Compiler Toolchains"],
      application: "Translating computational problems into deterministic, byte-level CPU instructions.",
      badge: "FOUNDATION",
    },
  ] as AcademicArea[],

  technicalInterests: [
    { title: "Software Development", field: "Core Engineering", icon: "Code" },
    { title: "Computer Networks", field: "Infrastructure", icon: "Network" },
    { title: "Data Structures & Algorithms", field: "Theory & Optimization", icon: "GitFork" },
    { title: "Embedded Systems", field: "Hardware-Software", icon: "Cpu" },
    { title: "ARM Cortex-M Architecture", field: "Silicon Systems", icon: "Microchip" },
    { title: "Machine Learning", field: "Data Intelligence", icon: "BrainCircuit" },
    { title: "Java Programming", field: "Enterprise & OOP", icon: "Coffee" },
    { title: "Python Programming", field: "Rapid Scripting & ML", icon: "Terminal" },
    { title: "Microsoft Windows & Dev Tools", field: "Developer Ecosystem", icon: "Laptop" },
  ],

  projects: [
    {
      id: "proj-cortex-telemetry",
      code: "PRJ // 01",
      title: "ARM Cortex-M Telemetry & Sensor Acquisition Node",
      subtitle: "Embedded firmware for real-time sensor sampling and hardware interrupt telemetry",
      category: "EMBEDDED",
      year: "2024",
      summary:
        "Engineered a deterministic embedded C firmware pipeline targeting 32-bit ARM Cortex-M microcontrollers. Configured NVIC timer interrupts and memory-mapped register peripherals for sub-millisecond sensor acquisition.",
      problem:
        "Embedded applications often suffer from unbounded jitter and latency spikes when polling sensor buses without hardware interrupt scheduling and direct register access.",
      approach:
        "Replaced blocking poll loops with non-blocking SysTick interrupts, implemented circular buffer ring queues for incoming ADC telemetry, and transmitted structured data frames over UART.",
      implementation: [
        "Direct register configuration for GPIO clocks, Baud rate registers, and ADC prescalers",
        "Hardware interrupt priority tuning using the Cortex-M Nested Vectored Interrupt Controller (NVIC)",
        "Lock-free circular buffer queue handling high-frequency sensor readings without thread contention",
        "Diagnostic packet structuring with CRC-16 checksums for transmission integrity",
      ],
      techStack: ["Embedded C", "ARM Cortex-M", "UART / I2C", "Keil / VS Code", "SysTick Timers"],
      metrics: [
        { label: "SAMPLING JITTER", value: "< 12 µs" },
        { label: "INTERRUPT LATENCY", value: "18 Cycles" },
        { label: "REGISTER OVERHEAD", value: "Zero HAL Bloat" },
      ],
      accentColor: "#1677FF",
      status: "ACTIVE LAB RESEARCH",
    },
    {
      id: "proj-packet-analyzer",
      code: "PRJ // 02",
      title: "OSI Protocol & TCP/IP Packet Routing Simulator",
      subtitle: "Software simulation of layered packet encapsulation, socket routing, and flow control",
      category: "NETWORKING",
      year: "2024",
      summary:
        "Built a modular networking simulator in Python and Java that visualizes the step-by-step encapsulation of data packets across the 7-layer OSI and 4-layer TCP/IP models, demonstrating sliding window flow control and subnet hops.",
      problem:
        "Understanding packet headers, MTU fragmentation, and checksum verification is often hindered by the abstract nature of physical network cables and closed software drivers.",
      approach:
        "Constructed an object-oriented protocol stack simulator that mirrors byte-level Ethernet frame headers, IPv4 addressing, TCP sequence numbers, and dynamic window sizing.",
      implementation: [
        "Synthesized byte-level frame serializers mimicking RFC 791 (IP) and RFC 793 (TCP) packet specs",
        "Interactive simulation of the 3-Way TCP Handshake (SYN -> SYN-ACK -> ACK) and 4-way teardown",
        "Simulated packet loss injectors to trigger TCP retransmissions and congestion window scaling",
        "CLI diagnostic utility for tracing CIDR subnetting and hop-by-hop next-gateway determinations",
      ],
      techStack: ["Python", "Java", "Socket Programming", "TCP/IP Protocol", "OSI Model"],
      metrics: [
        { label: "PROTOCOLS COVERED", value: "TCP, UDP, IP, ICMP" },
        { label: "LAYER DEPTH", value: "Layers 2 - 7" },
        { label: "PACKET EMULATION", value: "100% RFC Conforming" },
      ],
      accentColor: "#48C8FF",
      status: "PROTOTYPE",
    },
    {
      id: "proj-ml-classifier",
      code: "PRJ // 03",
      title: "Multivariate Classification & Sensor Intelligence Pipeline",
      subtitle: "Supervised machine learning pipeline for signal classification and predictive analysis",
      category: "MACHINE LEARNING",
      year: "2024",
      summary:
        "Designed an end-to-end Python machine learning pipeline on Jupyter Notebooks to process multivariate sensor datasets, perform statistical feature normalization, and train classification models.",
      problem:
        "Raw physical sensor telemetry features substantial noise, missing frames, and non-linear feature distributions that degrade naive algorithmic decisions.",
      approach:
        "Implemented rigorous feature scaling (StandardScaler), correlation matrix filtering, and trained comparative models (K-Nearest Neighbors and Decision Trees) with stratified k-fold cross validation.",
      implementation: [
        "Data hygiene pipeline in Python handling missing telemetry values and outlier rejection",
        "Feature vector extraction utilizing statistical moments (mean, variance, peak-to-peak amplitude)",
        "Model training, precision-recall curve plotting, and multi-class confusion matrix evaluation",
        "Exported lightweight inference logic for potential micro-edge embedded deployment",
      ],
      techStack: ["Python", "Jupyter Notebook", "NumPy", "Scikit-Learn Methodology", "Data Visualization"],
      metrics: [
        { label: "CLASSIFICATION ACCURACY", value: "94.2%" },
        { label: "CROSS-VALIDATION", value: "5-Fold Stratified" },
        { label: "INFERENCE RUNTIME", value: "< 2.8 ms" },
      ],
      accentColor: "#1677FF",
      status: "COMPLETED STUDY",
    },
    {
      id: "proj-algo-visualizer",
      code: "PRJ // 04",
      title: "Algorithmic Complexity & Data Structure Matrix",
      subtitle: "Interactive benchmark suite comparing asymptotic bounds of fundamental computational structures",
      category: "ALGORITHMS",
      year: "2023",
      summary:
        "Engineered an interactive Java and Web-based benchmarking framework to visually observe and analyze the execution cycles and pointer mutations across Linked Lists, Binary Search Trees, and Sorting Algorithms.",
      problem:
        "Theoretical Big-O notation often masks real-world cache locality and pointer dereference penalties that affect actual CPU clock cycles.",
      approach:
        "Created an experimental test harness that instrumented both theoretical comparisons/swaps and real execution time across varying input dataset distributions (sorted, reversed, random).",
      implementation: [
        "Implementations of QuickSort, MergeSort, HeapSort, and Binary Search Trees in pure Java and C",
        "Live step-by-step visual step debugger illustrating tree rotation and partitioning boundaries",
        "Deterministic memory footprint profiler measuring node overhead vs contiguous array buffers",
        "Integrated interactive test cases for worst-case, average-case, and best-case scenario validations",
      ],
      techStack: ["Java", "C", "Data Structures", "Algorithms", "Performance Profiling"],
      metrics: [
        { label: "DATA STRUCTURES", value: "8 Core Types" },
        { label: "ALGORITHMS", value: "12 Benchmarked" },
        { label: "SCALE BENCHMARKS", value: "Up to 100K Elements" },
      ],
      accentColor: "#08243B",
      status: "COMPLETED STUDY",
    },
  ] as Project[],

  personalStrengths: [
    {
      number: "01",
      title: "PROBLEM-SOLVING MINDSET",
      subtitle: "Deterministic Analytical Rigor",
      description:
        "Deconstructing complex software and hardware bottlenecks into first-principles components. Whether resolving a memory leak in C or diagnosing a packet drop in a subnet, I approach engineering challenges methodically.",
      badge: "CORE STRENGTH",
    },
    {
      number: "02",
      title: "WILLINGNESS TO LEARN",
      subtitle: "Continuous Knowledge Acquisition",
      description:
        "Technology evolves relentlessly. From mastering ARM Cortex-M register maps to exploring modern distributed network stacks, I possess an insatiable appetite to absorb new engineering paradigms quickly.",
      badge: "GROWTH MINDSET",
    },
    {
      number: "03",
      title: "TEAMWORK & COMMUNICATION",
      subtitle: "Collaborative Engineering",
      description:
        "Great engineering is a collective discipline. I prioritize clean code documentation, empathetic technical communication, active listening, and cohesive cooperation in collegiate and project environments.",
      badge: "INTERPERSONAL",
    },
    {
      number: "04",
      title: "ADAPTABILITY & EXECUTION",
      subtitle: "Resilient Under Uncertainty",
      description:
        "Comfortable pivoting between high-level application code, mathematical algorithms, and bare-metal embedded circuits. Highly adaptable to changing technical stacks, constraints, and project scopes.",
      badge: "AGILITY",
    },
  ],

  interests: [
    {
      id: "cars",
      code: "INTEREST // 01",
      title: "CARS & AUTOMOBILES",
      focus: "Mechanical Engineering · Automotive Electronics · Telemetry",
      description:
        "Fascinated by automotive mechanics, internal combustion dynamics, EV powertrain transitions, electronic control units (ECUs), and vehicle telemetry systems.",
      metric: "ECU / CAN-BUS INTERFACES",
      iconType: "Car",
    },
    {
      id: "bikes",
      code: "INTEREST // 02",
      title: "BIKES & DRIVING",
      focus: "Kinematics · Road Geometry · Open Road Touring",
      description:
        "Passionate about motorcycling and spirited road journeys across Kerala's mountain highways. Appreciation for dynamic chassis balance, braking kinetics, and machine feedback.",
      metric: "TWO-WHEEL DYNAMICS & TOURING",
      iconType: "Navigation",
    },
    {
      id: "computers",
      code: "INTEREST // 03",
      title: "TECHNOLOGY & COMPUTERS",
      focus: "Silicon Lithography · Micro-architectures · Custom Rigs",
      description:
        "Deep curiosity for computer hardware, semiconductor evolution, CPU micro-architectures, cooling thermodynamics, and benchmarking workstation setups.",
      metric: "SILICON ARCHITECTURE & PC BUILDS",
      iconType: "Cpu",
    },
    {
      id: "learning",
      code: "INTEREST // 04",
      title: "LEARNING NEW TECH",
      focus: "Emerging Paradigms · Edge Computing · AI Toolchains",
      description:
        "Always tracking next-generation developer tooling, cloud infrastructure, AI models, and real-time operating systems (RTOS) that shape the computing landscape.",
      metric: "CONTINUOUS EVOLUTION & DISCOVERY",
      iconType: "Sparkles",
    },
  ],
};

