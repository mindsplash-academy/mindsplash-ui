import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Heading from "@/components/Heading";
import GradientHeading from "@/components/GradientHeading";
import SubHeading from "@/components/SubHeading";
import Description from "@/components/Description";
import { Button } from "@/components/ui/button";
import { ChevronRight, Calendar, User, Clock, BookOpen, Tag } from "lucide-react";
import ContactUsModal from "../_components/ContactUsModal";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "IB & IGCSE Education Blog & Resources | MindSplash Academy Hyderabad",
  description:
    "Expert insights, study guides, IB MYP eAssessment tips, IGCSE exam strategies, Olympiad preparation roadmaps, and parent guides from MindSplash Academy Hyderabad.",
  keywords:
    "IB MYP eAssessment tips, IGCSE study plans, IB DP subject selection, Olympiad coaching Hyderabad, SAT preparation guide, MindSplash blog",
  openGraph: {
    title: "IB & IGCSE Education Blog & Resources | MindSplash Academy",
    description:
      "Expert educational articles, study plans, and exam strategies for IB MYP, IB DP, IGCSE, and Olympiads in Hyderabad.",
    type: "website",
    url: "https://mindsplash.in/blog",
  },
  alternates: {
    canonical: "/blog",
  },
};

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "IB MYP" | "IB DP" | "IGCSE" | "Olympiads" | "SAT & Prep" | "Parents";
  readTime: string;
  date: string;
  author: string;
  featured?: boolean;
  sources?: { label: string; href: string }[];
  sections: {
    heading: string;
    body: string;
    points?: string[];
  }[];
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "ib-myp-eassessment-guide-hyderabad",
    title: "IB MYP Mathematics: How to Prepare for eAssessment",
    excerpt:
      "Learn how criteria-based assessment, timed practice, and feedback fit into preparation for IB MYP eAssessment in Mathematics and Science.",
    category: "IB MYP",
    readTime: "7 min read",
    date: "September 2026",
    author: "Rahul Chakravarthy (Head of Academics, IIT Madras)",
    sources: [{ label: "IB: Understanding MYP eAssessment", href: "https://ibo.org/programmes/middle-years-programme/assessment-and-exams/understanding-eassessment/" }, { label: "IB: Preparing for an MYP on-screen exam", href: "https://www.ibo.org/programmes/middle-years-programme/assessment-and-exams/onscreen-examinations/preparing-for-an-exam/" }],
    featured: true,
    sections: [
      {
        heading: "What criteria-based assessment asks students to do",
        body: "IB MYP assessment looks at how students use subject knowledge and skills, not only whether they can recall facts. In Mathematics and Science, students need to explain their reasoning, interpret information, and apply ideas to a question or context.",
      },
      {
        heading: "Build practice around the task criteria",
        body: "Before starting a practice task, identify what the question asks you to demonstrate. Show working clearly, use relevant subject vocabulary, and check that the final response addresses every part of the prompt.",
        points: [
          "Practise a mix of short questions and extended responses.",
          "Use timed tasks to get comfortable working within the assessment format.",
          "Review feedback and retry questions where the reasoning was incomplete.",
        ],
      },
      {
        heading: "Use mock assessments to find gaps",
        body: "A mock is most useful when students review it afterwards. Group errors by topic or skill, revisit the underlying idea, and then complete a new question that tests the same skill. Digital practice platforms such as Assessprep can help students become familiar with computer-based assessment tasks.",
      },
    ],
  },
  {
    slug: "igcse-math-physics-study-plan",
    title: "IGCSE Mathematics Preparation Strategy for Hyderabad Students",
    excerpt:
      "Build a practical Cambridge IGCSE Mathematics revision plan with syllabus mapping, active recall, worked examples, past-paper practice and error review.",
    category: "IGCSE",
    readTime: "6 min read",
    date: "September 2026",
    author: "MindSplash Academic Team",
    featured: true,
    sections: [
      {
        heading: "Map the Mathematics syllabus to the school calendar",
        body: "Use the current Cambridge syllabus and the topics taught at school to make a checklist. Note which ideas are secure, which need another explanation and which have not yet been practised. In Hyderabad, students may follow different Cambridge syllabus codes or school schedules, so use the student’s own course documents rather than a generic topic list.",
      },
      {
        heading: "Practise recall, methods and clear working",
        body: "For each topic, write key facts or methods from memory, check them against notes, then solve a question without looking at a worked example. Show enough steps to make the reasoning clear and check units, signs and the answer against the question. A memory map can help organise formulas and connections, but it should lead into problem solving rather than replace it.",
        points: [
          "Mix familiar questions with problems that require choosing a method.",
          "Keep an error log and write what caused each mistake.",
          "Return to a similar problem later to see whether the correction holds.",
        ],
      },
      {
        heading: "Use past papers after topic learning",
        body: "When the methods are becoming reliable, practise Cambridge questions for the student’s syllabus and assessment route. Start with selected topic questions, then use mixed sections to practise deciding what to do. Review the mark scheme and teacher feedback for missed steps, command words and presentation. Add timed work gradually, using the school’s exam schedule to plan revision.",
      },
    ],
  },
  {
    slug: "ib-dp-aa-vs-ai-math-guide",
    title: "IB DP Mathematics AA vs AI: Which Option Is Right for a Student?",
    excerpt:
      "Compare IB DP Mathematics: Analysis and Approaches (AA) with Applications and Interpretation (AI), and consider course content, learning preferences and published university requirements.",
    category: "IB DP",
    readTime: "8 min read",
    date: "August 2026",
    author: "Rahul Chakravarthy",
    sections: [
      {
        heading: "How AA and AI differ",
        body: "Mathematics: Analysis and Approaches (AA) places more emphasis on algebraic methods, functions, and mathematical reasoning. Mathematics: Applications and Interpretation (AI) gives more attention to modelling, statistics, and using mathematics to interpret real situations. Both courses are available at Higher and Standard Level.",
      },
      {
        heading: "Compare the kind of work you enjoy",
        body: "Consider whether you prefer exploring abstract mathematical ideas or applying mathematics to data and practical contexts. Look at the course content and assessment style, and talk through your strengths and interests with your schoolâ€™s IB coordinator or mathematics teacher.",
      },
      {
        heading: "Check requirements for future study",
        body: "University entry requirements vary by institution, country, and degree. If you have a subject or course in mind, check the current requirements published by the universities you may apply to before choosing AA or AI, and confirm that the level you plan to take meets them.",
      },
    ],
  },
  {
    slug: "olympiad-preparation-strategy-ioqm-amc",
    title: "How to Prepare for Olympiad Mathematics from Grade 6 to Grade 10",
    excerpt:
      "A practical approach to Olympiad preparation: strengthen core concepts, work through unfamiliar problems, and learn from timed practice.",
    category: "Olympiads",
    readTime: "9 min read",
    date: "August 2026",
    author: "Rahul Chakravarthy (IIT Madras)",
    sections: [
      {
        heading: "Build problem-solving habits before speed",
        body: "Olympiad questions often reward careful reasoning and flexible use of familiar concepts. Students can start by writing down what is known, testing a simple case, and explaining why a proposed method works before trying to solve faster.",
      },
      {
        heading: "Practise unfamiliar problems",
        body: "Mix routine exercises with questions that require more than one step. After attempting a problem, compare different solution paths and write down the key idea that made the solution work. This helps students recognise useful patterns in later problems.",
        points: [
          "Keep a record of problems that were difficult and why.",
          "Revisit missed questions after a break and try them without notes.",
          "Use timed practice periodically to build pacing and focus.",
        ],
      },
      {
        heading: "Choose practice that matches the competition",
        body: "Preparation should reflect the competition a student plans to take, such as IOQM or AMC. Check the relevant syllabus and sample questions, then plan practice around the studentâ€™s current level and the skills those questions require.",
      },
    ],
  },
  {
    slug: "sat-psat-prep-tips-hyderabad",
    title: "Digital SAT Preparation: Adaptive Math and Evidence-Based Reading",
    excerpt:
      "Review ways to prepare for the Digital SAT, including focused Math and Reading and Writing practice, timed work, and review of missed questions.",
    category: "SAT & Prep",
    readTime: "6 min read",
    date: "July 2026",
    author: "MindSplash Academic Team",
    sections: [
      {
        heading: "Prepare for both sections",
        body: "Plan practice for Reading and Writing as well as Math. In Reading and Writing, work on understanding passages, interpreting evidence, and editing sentences. In Math, practise the concepts and question types in the official test outline.",
      },
      {
        heading: "Practise with the digital format",
        body: "Use the current official practice materials to become familiar with the computer-based test and its adaptive structure. Timed practice can help students notice where they lose time, but accuracy and understanding should come first.",
      },
      {
        heading: "Review every practice test",
        body: "A score alone does not show what to study next. For each missed or guessed question, identify the underlying skill, understand the correct reasoning, and practise a similar question. Use the results to set the next study priorities.",
      },
    ],
  },
  {
    slug: "parent-guide-choosing-academic-coaching",
    title: "Questions to Ask Before Choosing an IB or IGCSE Tuition Centre",
    excerpt:
      "Questions parents can ask about curriculum fit, teacher feedback, practice routines, communication, and centre location before choosing academic support.",
    category: "Parents",
    readTime: "5 min read",
    date: "October 2026",
    author: "MindSplash Academic Team",
    sections: [
      {
        heading: "Start with your childâ€™s course and goals",
        body: "Before comparing classes, note the curriculum, year or grade, subjects, and the areas your child wants help with. Ask how the programme fits that course and what information the team needs to recommend a suitable plan.",
        points: [
          "Which curriculum and subject does the class support?",
          "What should we share about current strengths and challenges?",
          "How will we know whether the support is a good fit?",
        ],
      },
      {
        heading: "Ask how teaching and feedback work",
        body: "A useful conversation should explain how lessons are organised, how students practise, and how teachers respond when a student is stuck. Ask for examples of the feedback families can expect and how often progress is discussed.",
      },
      {
        heading: "Understand the practice routine",
        body: "Ask how practice connects to the studentâ€™s course and upcoming assessments, how mistakes are reviewed, and what work is expected between lessons. Clear expectations make it easier for families to support a steady routine at home.",
      },
      {
        heading: "Check practical details before enrolling",
        body: "Confirm the schedule, fees, class format, and the centre that works best for your family. MindSplash Academy has centres in Khajaguda, Kokapet, and Financial District; compare the branch details and ask the team about current availability.",
      },
    ],
  },
  {
    slug: "ib-physics-common-mistakes-preparation",
    title: "IB Physics Preparation: Common Mistakes and How to Avoid Them",
    excerpt: "A practical review routine for IB Physics: connect equations to concepts, show units, interpret data and learn from errors in practice questions.",
    category: "IB DP",
    readTime: "7 min read",
    date: "October 2026",
    author: "MindSplash Academic Team",
    sections: [
      { heading: "Using an equation without checking the physical idea", body: "An equation can be remembered correctly and still be applied to the wrong situation. Before substituting values, identify what the quantities represent, sketch the setup when useful, and check whether the chosen relationship matches the physical process described. After calculating, ask whether the size and direction of the result make sense." },
      { heading: "Dropping units or skipping working", body: "Write units with measured and calculated quantities, show substitutions clearly, and convert units before using a relationship when needed. A complete line of working makes it easier to spot a conversion or arithmetic mistake and gives a teacher useful information when reviewing the method." },
      { heading: "Treating graphs and practical data as decoration", body: "Data questions ask students to read scales, identify patterns and support claims with evidence. Practise describing the trend, using values from the graph, and distinguishing an observation from an explanation. In practical contexts, pay attention to variables, uncertainty and whether the evidence supports the conclusion." },
      { heading: "Reviewing practice without analysing errors", body: "After a question, classify the error: concept, model selection, algebra, units, graph reading or command-word interpretation. Revisit the underlying idea and attempt a fresh question that tests the same skill. Repeating the original answer from memory does not show whether the misunderstanding is resolved." },
    ],
  },
  {
    slug: "igcse-physics-vs-ib-physics",
    title: "IGCSE Physics vs IB Physics: Key Differences for Students",
    excerpt: "Compare the course structures, assessment contexts and study planning questions students should check when moving between Cambridge IGCSE and the IB Diploma Programme.",
    category: "Parents",
    readTime: "6 min read",
    date: "October 2026",
    author: "MindSplash Academic Team",
    sources: [{ label: "Cambridge IGCSE qualification and assessment", href: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/qualification/" }, { label: "IB Diploma Programme curriculum", href: "https://ibo.org/programmes/diploma-programme/curriculum/" }],
    sections: [
      { heading: "They belong to different qualification frameworks", body: "Cambridge IGCSE Physics is a subject qualification within Cambridge Upper Secondary. IB Physics is a subject within the Diploma Programme, which also includes other subject groups and the DP core. A student should compare the exact course, level and school plan rather than assuming the names refer to identical courses." },
      { heading: "Compare the course and assessment documents", body: "Cambridge IGCSE assessment takes place at the end of the course and the exact components depend on the syllabus. In the IB DP, subject requirements and assessment are set within the DP framework and the student follows Higher Level or Standard Level. Download or request the current subject guide and assessment outline for the exact course being considered." },
      { heading: "What should a student carry forward?", body: "Both courses benefit from conceptual understanding, mathematical fluency, careful use of units, practical reasoning and regular question practice. The transition still requires checking which topics, notation and assessment demands are new. Use a topic map to identify prior knowledge, then plan learning around the student’s current course materials." },
      { heading: "Questions to ask the school", body: "Ask which syllabus or subject guide applies, which examination session the student will sit, what practical or internal work is required, and how the course is assessed. For current course details, use the official Cambridge and IB materials linked below." },
    ],
  },
  {
    slug: "ib-myp-study-timetable-exam-season",
    title: "IB MYP Study Timetable for Exam Season",
    excerpt: "Create a flexible MYP exam-season timetable that balances subject review, practice tasks, rest and time to respond to feedback.",
    category: "IB MYP",
    readTime: "6 min read",
    date: "October 2026",
    author: "MindSplash Academic Team",
    sources: [{ label: "IB: Preparing for an MYP on-screen exam", href: "https://www.ibo.org/programmes/middle-years-programme/assessment-and-exams/onscreen-examinations/preparing-for-an-exam/" }],
    sections: [
      { heading: "Begin with the school calendar and task list", body: "Write down the confirmed assessment dates, subjects, school deadlines and other fixed commitments. Avoid building a plan around assumed exam dates or formats; use the schedule and guidance supplied by the student’s school. Break each subject into specific topics or skills rather than writing a broad block such as ‘study science’." },
      { heading: "Use short, focused blocks with a clear output", body: "For each study block, choose an observable task: explain a concept from memory, solve a set of questions, annotate a source or review feedback from a previous task. Rotate subjects across the week and leave space for challenging topics to return after a delay. A realistic plan is more useful than an overloaded one." },
      { heading: "Make time for practice and correction", body: "Include practice in the format required by the school course, then reserve a separate block to review the work. Record what was misunderstood, revisit the concept and try a different question. For computer-based eAssessment preparation, use school-approved materials and get familiar with the relevant digital task format." },
      { heading: "Review the timetable weekly", body: "At the end of the week, keep the study methods that helped and adjust blocks that were repeatedly missed. Plan breaks and sleep along with study. A timetable is a guide for organising effort; it cannot replace teacher instructions or guarantee a particular result." },
    ],
  },
  {
    slug: "parents-identify-learning-gaps-before-exams",
    title: "How Parents Can Identify Learning Gaps Before Final Exams",
    excerpt: "Notice patterns in homework, explanations and assessment feedback, then help your child plan specific next steps with their teacher.",
    category: "Parents",
    readTime: "5 min read",
    date: "October 2026",
    author: "MindSplash Academic Team",
    sections: [
      { heading: "Look for recurring patterns, not one difficult mark", body: "A single low score does not explain what a student knows. Look across recent classwork and feedback: does the same topic recur, are steps skipped, or are answers incomplete because the question was misread? Notice whether the student can explain a method and use it on a new example, not only repeat a worked solution." },
      { heading: "Ask the student to explain their thinking", body: "Invite the student to talk through a question they found difficult. Ask what they tried, where they became unsure and what feedback they received. Keep the conversation curious and specific; the aim is to understand the obstacle, not to turn every evening into another test." },
      { heading: "Turn the gap into a manageable next step", body: "Choose one skill to revisit, find a suitable example or ask the teacher which resource matches the current course. After practice, compare the new attempt with the feedback and note what changed. If the problem persists, discuss it with the school or tutor so support can target the cause." },
      { heading: "When to seek teacher guidance", body: "Contact the teacher if the student cannot tell which topics are required, feedback is unclear, or the same difficulty remains after focused practice. Share examples of the work and ask what the student should be able to do next. Avoid inferring a diagnosis or ability level from one assessment." },
    ],
  },
  {
    slug: "ib-vs-igcse-curriculum-assessment-pathway",
    title: "IB vs IGCSE: Curriculum, Assessment and Study Pathways",
    excerpt: "A parent-friendly comparison of IB programme frameworks and Cambridge IGCSE subject qualifications, with questions to ask about the student’s school pathway.",
    category: "Parents",
    readTime: "7 min read",
    date: "October 2026",
    author: "MindSplash Academic Team",
    sources: [{ label: "IB programmes", href: "https://ibo.org/programmes/" }, { label: "IB Diploma Programme curriculum", href: "https://ibo.org/programmes/diploma-programme/curriculum/" }, { label: "Cambridge IGCSE curriculum", href: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/curriculum/" }, { label: "Cambridge IGCSE qualification and assessment", href: "https://www.cambridgeinternational.org/programmes-and-qualifications/cambridge-upper-secondary/cambridge-igcse/qualification/" }],
    sections: [
      { heading: "First clarify what ‘IB’ means", body: "The IB offers several programmes. The Middle Years Programme and Diploma Programme have different age ranges and structures. The DP includes subject groups and a core; a school’s use of the MYP or DP should be checked directly rather than described simply as ‘the IB curriculum’." },
      { heading: "Cambridge IGCSE is a subject qualification", body: "Cambridge IGCSE offers a broad range of subjects that schools can combine in different ways. Assessment components depend on the subject syllabus and can include written, oral, coursework or practical assessment. Check the current syllabus code and options selected by the student’s school." },
      { heading: "Assessment and study planning differ by course", body: "The IB programme framework includes school-based assessment and, in some MYP contexts, optional eAssessment; the DP has its own course requirements and assessment. Cambridge IGCSE assessment is tied to the syllabus followed. Students should use current school calendars, subject guides and teacher instructions for preparation." },
      { heading: "Compare the actual next-step pathway", body: "There is no single answer to which route is right for every learner. Compare subjects available at the school, learning preferences, transfer plans and entry requirements for future courses. For university applications, check requirements with each institution because they vary by country, programme and year. Official curriculum pages are linked below." },
    ],
  },
  {
    slug: "mock-examinations-time-management",
    title: "How Mock Examinations Help IB and IGCSE Students Manage Time",
    excerpt: "Use mock papers as a diagnostic: practise pacing, identify question types that take longer and build a feedback-led revision plan.",
    category: "Parents",
    readTime: "5 min read",
    date: "October 2026",
    author: "MindSplash Academic Team",
    sections: [
      { heading: "A mock is a rehearsal and a diagnostic", body: "A timed practice can help students experience the sequence and pace of an assessment. The score alone is not the main lesson: reviewing which questions took too long, where instructions were missed and which concepts were uncertain gives the next study session a clear purpose." },
      { heading: "Practise timing gradually", body: "Begin with short sections or selected questions if the student is still learning the content. As confidence grows, use complete practice papers that match the current course and conditions. Students should follow school guidance about permitted materials, timing and approved past papers." },
      { heading: "Review the work before taking another mock", body: "Classify missed marks by cause, revisit the relevant topic and practise a similar question. Note whether the issue was knowledge, method, working, interpretation or pacing. Another full mock is most useful after the student has had time to respond to that feedback." },
      { heading: "Keep practice supportive", body: "Explain the purpose of a mock before starting and treat it as information about preparation, not a prediction of a final grade. Schedule rest and discuss persistent concerns with the teacher. Assessment formats vary by course, syllabus and school, so use the correct materials." },
    ],
  },
  {
    slug: "math-study-techniques-international-curriculum",
    title: "Math Study Techniques for International Curriculum Students",
    excerpt: "Use active recall, worked examples, varied practice and error review to make Mathematics study more deliberate across international courses.",
    category: "Parents",
    readTime: "6 min read",
    date: "October 2026",
    author: "MindSplash Academic Team",
    sections: [
      { heading: "Recall methods before looking at notes", body: "Close the book and write the definitions, relationships or steps you remember for a topic. Then check the course notes and correct gaps. This shows what is available from memory and gives students a focused list to practise instead of rereading a chapter passively." },
      { heading: "Move from worked examples to independent problems", body: "Study a worked example by explaining why each step is used. Cover the solution and try a similar problem, then vary the question so the student must choose a method. Gradually remove prompts. The goal is to recognise when and why a method applies, not just copy a familiar sequence." },
      { heading: "Keep an error log that leads to action", body: "For each error, note the topic, the point where the reasoning changed, and one next step. Separate concept gaps from arithmetic slips, misread instructions and incomplete explanations. Re-attempt a related problem later to check whether the correction holds." },
      { heading: "Practise in the format of the course", body: "Use the syllabus and teacher guidance to select suitable questions. Some courses place emphasis on showing reasoning, some include modelling or technology use, and assessment details differ. Mix topics periodically and practise communicating a complete solution under appropriate time limits." },
    ],
  },
];

export default function BlogHubPage() {
  const featuredPost = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const regularPosts = BLOG_POSTS.filter((p) => p.slug !== featuredPost.slug);

  return (
    <>
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
      {/* Hero Header */}
      <section className="mx-3 mt-2 sm:mx-5 md:mx-7 md:mt-3 flex justify-center items-center min-h-[300px] md:min-h-[360px] rounded-[50px] shadow-lg bg-gradient-to-r from-gradient-start to-gradient-end px-6 py-12">
        <div className="text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-white text-sm font-semibold mb-4">
            <BookOpen className="w-4 h-4" />
            MindSplash Knowledge Hub
          </div>
          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight mb-4">
            IB, IGCSE & Olympiad Insights
          </h1>
          <p className="text-lg md:text-xl text-foreground/90 font-medium max-w-2xl mx-auto">
            Expert academic guides, exam strategies, subject breakdowns, and university preparation roadmaps from Hyderabadâ€™s leading IB/IGCSE faculty.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="w-[85%] lg:w-[75%] mx-auto my-16">
        {/* Featured Article Card */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <span className="h-3 w-3 rounded-full bg-gradient-start inline-block"></span>
            <h2 className="text-xl font-bold uppercase tracking-wider text-secondary">
              Featured Guide
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 p-8 lg:p-10 bg-secondary-foreground border border-card-border rounded-[36px] shadow-lg hover:shadow-xl transition-all">
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="bg-gradient-to-r from-gradient-start to-gradient-end text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-secondary font-medium">
                    <Clock className="w-4 h-4 text-gradient-start" /> {featuredPost.readTime}
                  </span>
                  <span className="flex items-center gap-1 text-sm text-secondary font-medium">
                    <Calendar className="w-4 h-4 text-gradient-start" /> {featuredPost.date}
                  </span>
                </div>

                <Link href={`/blog/${featuredPost.slug}`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-secondary hover:text-gradient-start transition-colors mb-4 leading-snug">
                    {featuredPost.title}
                  </h3>
                </Link>

                <p className="text-description text-base md:text-lg leading-relaxed mb-6">
                  {featuredPost.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-card-border/60">
                <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
                  <User className="w-4 h-4 text-gradient-start" /> {featuredPost.author.startsWith("Rahul") ? <Link href="/authors/rahul-chakravarthy" className="hover:underline">{featuredPost.author}</Link> : featuredPost.author}
                </div>
                <Button asChild className="group">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    Read Guide
                    <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden bg-gradient-to-br from-gradient-start/10 to-gradient-end/20 flex items-center justify-center p-8 border border-gradient-start/20">
              <div className="text-center">
                <Image
                  src="/meticulous.jpg"
                  alt="Student studying in front of a classroom bookshelf"
                  width={400}
                  height={300}
                  className="rounded-2xl shadow-md object-cover w-full h-[260px]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* All Topic Clusters & Articles Grid */}
        <div>
          <div className="flex items-center justify-between mb-8 border-b border-card-border pb-4">
            <h2 className="text-2xl font-bold">
              <Heading content="Latest " />
              <GradientHeading content="Academic Articles" />
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {regularPosts.map((post) => (
              <article
                key={post.slug}
                className="p-7 bg-secondary-foreground border border-card-border rounded-[30px] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-gradient-to-r from-gradient-start to-gradient-end text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-secondary font-medium">
                      <Clock className="w-3.5 h-3.5" /> {post.readTime}
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold text-secondary hover:text-gradient-start transition-colors mb-3 leading-snug">
                      {post.title}
                    </h3>
                  </Link>

                  <p className="text-description text-sm leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-card-border/60 flex items-center justify-between text-xs text-secondary">
                  <span className="font-semibold">{post.author.startsWith("Rahul") ? <Link href="/authors/rahul-chakravarthy" className="hover:underline">{post.author}</Link> : post.author}</span>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="font-bold text-gradient-start hover:underline inline-flex items-center gap-1"
                  >
                    Read More <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <nav aria-label="Browse programmes and locations" className="mx-auto mb-12 flex w-[85%] flex-wrap justify-center gap-x-6 gap-y-3 rounded-2xl bg-secondary-foreground p-6 text-sm font-semibold text-gradient-start lg:w-[75%]">
        <Link href="/programs/ib-myp" className="hover:underline">IB MYP tuition in Hyderabad</Link>
        <Link href="/programs/ib-dp" className="hover:underline">IB DP subject tuition in Hyderabad</Link>
        <Link href="/programs/igcse" className="hover:underline">IGCSE tuition in Hyderabad</Link>
        <Link href="/programs/olympiads" className="hover:underline">Olympiad classes in Hyderabad</Link>
        <Link href="/programs/exam-prep" className="hover:underline">SAT and PSAT preparation in Hyderabad</Link>
        <Link href="/branches" className="hover:underline">Find a Hyderabad tuition centre</Link>
        <Link href="/contact" className="hover:underline">Ask a question or book a free demo</Link>
      </nav>

      <ContactUsModal />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "MindSplash Academy IB & IGCSE Blog",
            description:
              "Expert academic articles, study guides, and exam strategies for IB MYP, IB DP, IGCSE, and Olympiads in Hyderabad.",
            url: "https://mindsplash.in/blog",
            publisher: {
              "@type": "EducationalOrganization",
              name: "MindSplash Academy",
              logo: "https://mindsplash.in/mindsplash-logo.png",
            },
            blogPost: BLOG_POSTS.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              url: `https://mindsplash.in/blog/${post.slug}`,
              author: post.author.startsWith("MindSplash")
                ? {
                    "@type": "Organization",
                    name: "MindSplash Academic Team",
                    url: "https://mindsplash.in/about",
                  }
                : {
                    "@type": "Person",
                    name: "Rahul Chakravarthy",
                    url: "https://mindsplash.in/about#leadership-team",
                  },
            })),
          }),
        }}
      />
    </>
  );
}
