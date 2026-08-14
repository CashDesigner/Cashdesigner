# Website Content and Structure Brief

This file is the durable source of truth for updates to **matthew-brandenburg.com**. When current website content conflicts with this file, use this file.

_Last consolidated: August 13, 2026._

## Confirmed Website Decisions

- **Primary goal:** Win engineering internships.
- **Audience emphasis:** Recruiters and engineering hiring teams should quickly see mechanical design and manufacturing, aerospace systems, and technical leadership.
- **Visual direction:** Preserve the existing dark, blue-accented technical aesthetic and overall design language. Content changes may adjust layout, but should not replace the established visual identity.
- **Project interaction:** Keep projects on one page. Each project card should reveal additional concise information when hovered or focused; do not create separate project-detail pages. The expanded content must also work for keyboard and touch users, where hover is unavailable.
- **Résumé privacy:** Do not offer a directly accessible public résumé download. Retain a controlled request-by-email flow or another privacy-preserving request mechanism.
- **Navigation:** Rename the former `Resume` navigation item to `Experience`. Keep a private résumé-request action on both the landing page and the Experience page.
- **Project visuals:** When project photos are unavailable, use the associated organization marks as subtle card backgrounds. Do not invent project photography.
- **Confirmed contact:** Continue using `mattbburg@outlook.com` for copy-email and résumé-request actions and `linkedin.com/in/matthew-brandenburg-944b4a379` for LinkedIn.
- **Pending pull requests:** Use their work only when it improves the planned site:
  - PR #7's responsive homepage fixes are useful, but the final implementation should incorporate reviewer recommendations so the footer cannot overlap content at short desktop viewport heights and heading scaling remains gradual.
  - PR #8's L1 High Powered Rocketry certification content is required by this brief. Optimize the certificate image, improve its alternative text/loading behavior, and remove superseded assets only after confirming they are unused.
- **No Featured section.**
- **Do not feature the Lamar/LUNAR news article.**
- **No website implementation or deployment decisions override the personal facts and attribution limits below.**

## Full Research and Content Brief

I did a separate research/content-planning session for the website. Treat the following as the current source of truth for my personal information and use it to update matthew-brandenburg.com.

IMPORTANT:
- Do not use old website content when it conflicts with this brief.
- Do not add a "Featured" section.
- Do not feature the Lamar/LUNAR news article.
- Keep the existing overall visual style unless a content change requires layout changes.
- First save this brief into the repo as docs/website-content-brief.md so it remains available for future work.

==================================================
CURRENT PERSONAL / ACADEMIC INFO
==================================================

Name: Matthew Brandenburg
School: Lamar University
Degree: B.S. Mechanical Engineering
Expected Graduation: May 2029
Current GPA: 3.4 / 4.0

Current engineering identity should emphasize three areas:
1. Mechanical Design & Manufacturing
2. Aerospace / Launch Vehicle Engineering
3. Engineering Leadership

Suggested homepage identity:
Mechanical Engineering Student
Vehicle Team Lead · AIAA President · Fabrication Lab Assistant

Do not present me primarily as just a machine operator.

==================================================
CURRENT ORGANIZATIONS / LEADERSHIP
==================================================

AIAA — American Institute of Aeronautics and Astronautics
Role: President
Current: 2026–2027

Planned initiatives:
- Host aerospace-industry information sessions with major aerospace companies and connect those companies directly with Lamar students.
- Host resume critiques and career-development opportunities.
- Conduct community/student outreach events to increase interest in aerospace.
- Organize/support opportunities for students to pursue Level 1 and Level 2 High Power Rocketry certifications.
- Host practical engineering skill workshops.
- Partner with ASME and LUNAR for training in skills such as:
  - SolidWorks
  - Excel
  - PCB design
  - general engineering software/tools
  - relevant mechanical/electrical engineering skills
- Build collaboration between engineering organizations rather than duplicating technical training.

Important wording:
Say "organizing/supporting opportunities for students to pursue L1/L2 HPR certification," not that AIAA itself issues the certifications.

--------------------------------------------------

ASME — American Society of Mechanical Engineers
Current roles:
- Treasurer
- Design Specialist

Old title "Secretary" is obsolete and should be removed.

Treasurer responsibilities:
- Financial/organizational support
- Budget and purchasing coordination
- Supporting project activities

Design Specialist responsibilities:
- Mechanical design
- CAD
- Design reviews
- Helping turn concepts into manufacturable systems
- Supporting technical ASME projects

Major ASME project:
Powered Upper-Body Exoskeleton

--------------------------------------------------

LUNAR — Lamar University Association of Rocketry
Current role:
VEHICLE TEAM LEAD

Old role "Safety Officer – Vehicle Team" is obsolete.

This year LUNAR is competing in:
NASA Student Launch / University Student Launch Initiative
2026–2027 season / 2027 competition

My Vehicle Team Lead responsibilities:
- Lead the launch-vehicle subteam.
- Be responsible for vehicle design direction.
- Lead/coordinate launch-vehicle CAD.
- Work heavily with SolidWorks and OpenRocket.
- Coordinate vehicle mechanical architecture.
- Review vehicle designs and integration.
- Assign/coordinate vehicle-team technical work.
- Collaborate with Payload, Avionics, Recovery, Manufacturing, and team leadership.
- Resolve packaging and mechanical-interface conflicts between subteams.
- Support transition from conceptual design to detailed CAD, manufacturing, assembly, testing, and flight.
- Help ensure the vehicle meets NASA competition requirements.

This is technical engineering leadership, not just club participation.

==================================================
NASA STUDENT LAUNCH 2027 PROJECT
==================================================

Create this as a NEW flagship project.

Recommended title:
NASA Student Launch 2027 — USLI Launch Vehicle

Role:
Vehicle Team Lead · LUNAR

This is separate from the previous IREC Ancalagon rocket.

NASA Student Launch is approximately a nine-month engineering design/build/test program with formal engineering milestones including:
- Proposal
- Preliminary Design Review (PDR)
- Critical Design Review (CDR)
- Flight Readiness Review (FRR)
- Subscale flight
- Full-scale Vehicle Demonstration Flight
- Launch Readiness Review
- Competition launch
- Post-launch review

Important current vehicle constraints/context:
- Competition vehicle carries the autonomous competition payload.
- Target apogee is 4,000–6,000 ft AGL.
- Vehicle must be recoverable and reusable.
- Minimum static stability margin: 2.0.
- Minimum thrust-to-weight ratio: 5:1.
- Minimum rail exit velocity: 52 ft/s.
- Vehicle cannot exceed Mach 1.
- A newly constructed subscale rocket must be designed and successfully flown.
- Full-scale vehicle must complete a successful demonstration flight before FRR.

Do not turn all these requirements into clutter on the project card. Use them to give technical context on the detailed project page.

Current design workflow includes:
- Full-scale OpenRocket model
- Subscale OpenRocket design
- Full-scale SolidWorks model
- Subscale SolidWorks model
- Comparing SolidWorks and OpenRocket geometry for discrepancies
- Vehicle subsystem packaging
- Mechanical integration
- Manufacturing planning

SCANR PAYLOAD:
NASA's 2027 payload challenge is called SCANR:
Spatial Cartography & Autonomous Navigation Robot.

It must autonomously locate a visual target after landing, photograph it, and calculate distance using onboard sensing/processing without GPS for the distance measurement.

I am VEHICLE TEAM LEAD, not Payload Team Lead.

Therefore:
- Mention SCANR as mission/interface context.
- Do NOT claim I personally designed the SCANR payload unless later content specifically documents my work on it.
- My relevant responsibility is ensuring the vehicle accommodates and integrates the payload, avionics, recovery system, structural components, retention/deployment interfaces, access, mass/CG effects, etc.

==================================================
PREVIOUS LUNAR / IREC PROJECT
==================================================

Keep the prior project, but clearly make it historical.

Recommended title:
IREC Ancalagon Launch Vehicle
Vehicle Design & Manufacturing · 2025–2026

Work included:
- Machined 6061 aluminum bulkheads.
- Machined centering rings.
- Manufactured mechanical/control components.
- Worked to approximately ±0.01 in tolerances where applicable.
- Used physical/subscale modeling to identify CAD and packaging problems.
- Worked on mechanical integration between vehicle, payload, avionics bay, and through-wall fin structures.
- Conducted boat-tail design work.
- Compared drag.
- Compared predicted apogees.
- Compared materials.
- Performed boat-tail CAD.
- Participated in general launch-vehicle mechanical design/manufacturing.

This should show progression:
2025–26 contributor/design/manufacturing work
→
2026–27 Vehicle Team Lead

==================================================
ASME POWERED UPPER-BODY EXOSKELETON
==================================================

Create/keep this as another flagship project.

Recommended title:
Powered Upper-Body Exoskeleton
ASME · Design Specialist
Status: Active Development

Project focus:
Upper-body/biceps-curl assistance using one linear actuator per arm.

Engineering areas:
- Mechanical mechanism development
- SolidWorks assembly design
- Human-interface/ergonomic constraints
- Adjustable shoulder geometry
- Adjustable backplate system
- Linear actuator selection
- Structural brackets
- Pivot/hinge design
- Positive locking mechanisms
- Hard mechanical stops
- Load-path analysis
- Actuator mounting geometry
- Battery/actuator integration
- Fabrication
- Iterative mechanical design
- Multi-user adjustability
- Safety considerations for a wearable powered mechanism

This project should demonstrate traditional mechanical/mechanism design and complement the aerospace work.

==================================================
FABRICATION LAB ASSISTANT
==================================================

Employer:
Lamar University

Title:
Fabrication Lab Assistant

Dates:
September 2025 – Present

The website should emphasize END-TO-END ENGINEERING SUPPORT.

Most important description:
I assist Senior Design teams from concept, through CAD/design development, through fabrication, and into final creation/assembly.

Responsibilities/capabilities:
- Senior Design project support
- Concept development
- CAD/design troubleshooting
- Design for Manufacturability
- SolidWorks
- Fusion 360 CAM
- CNC milling
- CNC turning
- Machining aluminum and other engineering materials
- FDM 3D printing
- SLA/resin printing
- SLS/nylon experience
- Welding
- Laser cutting
- Laser engraving
- Woodworking
- Hand tools
- Mechanical assembly
- Process/material selection
- Rapid prototyping
- Machine/shop troubleshooting
- Supporting students through fabrication problems

Existing resume metrics that can be retained when appropriate:
- Programmed CNC toolpaths for 100+ precision components across multiple projects.
- Experience with 15+ industrial machines.
- Worked with materials including 6061 aluminum, Nylon-12, TPU, and PLA.

IMPORTANT:
Do not say "operated 15+ industrial machines simultaneously."
Use wording such as:
"Operated and supported 15+ industrial machines."

The main impression should be:
concept → CAD → manufacturing → assembly

not simply "operates shop machines."

==================================================
TECHNICAL & OUTREACH ASSISTANT
==================================================

Employer:
Lamar University
Department of Mechanical Engineering

Title:
Technical & Outreach Assistant

Supervisor/context:
Assisted Dr. Jenny Zhou, Chair of Mechanical Engineering.

Dates:
June 2026 – Present

Technical/shop work:
- Assisted with CNC machine maintenance over the summer.
- Helped prepare CNC/shop equipment for future courses.
- Organized machine-shop tooling/materials.
- Helped maintain engineering equipment.

Department organization:
- Cataloged tools, materials, equipment, and stored items.
- Organized previously unstructured storage spaces/closets.
- Identified and sorted items for retention, reuse, recycling, or disposal.
- Improved inventory visibility and accessibility.

Recruiting/outreach:
- Represented Mechanical Engineering at New Student Orientation.
- Helped with College/department recruiting events.
- Staffed recruiting tables.
- Spoke with incoming students.
- Explained Mechanical Engineering and engineering opportunities.
- Introduced students to technical organizations and campus engineering resources.

This should appear as its own Experience entry.

==================================================
ENGINEERING CAMP COUNSELOR
==================================================

Employer:
Lamar University College of Engineering

Title:
Engineering Camp Counselor

Time:
Summer 2026

I worked three engineering camps:

1. L.I.T.E. Camp
Lamar Introduction to Engineering
July 13–17, 2026
Audience: rising 7th–8th grade students

Responsibilities:
- Supervised campers.
- Facilitated engineering activities.
- Helped explain technical concepts.
- Encouraged teamwork.
- Mentored students.
- Represented Lamar Engineering.

2. Project Engineer
July 20–24, 2026
Audience: high-school students

Responsibilities:
- Supported more advanced engineering activities.
- Mentored students interested in engineering.
- Assisted with hands-on technical activities.
- Supported the camp environment and College of Engineering programming.

3. Engineering Math Boot Camp
August 10–14, 2026
Audience: incoming first-year engineering students/transfers

Responsibilities:
- Peer mentorship.
- Helped incoming students transition into engineering.
- Facilitated activities.
- Introduced students to organizations/opportunities.
- Connected students with engineering resources.
- Supported engineering programming.

EXXONMOBIL MARBLE ROLLER COASTER:
During Engineering Math Boot Camp, I served as a judge for the ExxonMobil-sponsored Marble Roller Coaster Engineering Challenge.

This can be included under the camp role.

Relevant judging concepts:
- Engineering design
- Creativity
- Functionality
- Repeatability / consistency
- Construction quality
- Teamwork / design process

Do NOT create a separate job just for judging the challenge.

==================================================
CURRENT ORGANIZATIONS
==================================================

Show these as CURRENT:

1. AIAA
President

2. ASME
Treasurer & Design Specialist

3. LUNAR
Vehicle Team Lead

REMOVE NEST from current organization cards.

Historical:
NEST Member
September 2025 – May 2026

It can remain on a full resume/history if useful, but it should not be part of my main current identity.

==================================================
EDUCATION / HONORS
==================================================

Lamar University
B.S. Mechanical Engineering
Expected May 2029
GPA: 3.4 / 4.0

Honor:
Lamar University Dean's List
Fall 2025

==================================================
CERTIFICATIONS / TECHNICAL CREDENTIALS
==================================================

Engineering-relevant credentials to emphasize:

- AutoCAD certification
- Microsoft Office Specialist
- ACE CNC Machining Training Program
- Haas Basic Mill Operator
- Haas Basic Lathe Operator
- Level 1 High Power Rocketry certification

TABC Seller-Server certification exists but does not need prominent placement on the engineering website.

==================================================
OTHER PROJECT
==================================================

Parametric Minimalist Wallet
Personal Project

Keep it, but it should have lower priority than:
1. NASA USLI 2027
2. ASME Exoskeleton
3. IREC Ancalagon

It demonstrates:
- Product design
- SolidWorks
- Parametric modeling
- Additive manufacturing
- Rapid iterative prototyping
- Ergonomics
- Card retention
- FDM testing

==================================================
PROJECT PAGE ORDER
==================================================

Recommended:

01 — NASA Student Launch 2027 — USLI Launch Vehicle
Vehicle Team Lead · Aerospace Systems · CAD · Integration

02 — Powered Upper-Body Exoskeleton
Mechanical Design · Mechanisms · Structural Design · Prototyping

03 — IREC Ancalagon Launch Vehicle
Vehicle Design · Manufacturing · CAD · High-Power Rocketry

04 — Rocket Tracking Ground Station
Mechatronics · Telemetry · Systems

05 — Parametric Minimalist Wallet
Product Design · Additive Manufacturing · Parametric CAD

==================================================
EXPERIENCE ORDER
==================================================

1. Fabrication Lab Assistant
2. Technical & Outreach Assistant — Mechanical Engineering
3. Engineering Camp Counselor — College of Engineering
4. Market Basket Cashier

Market Basket should remain for employment history but have less visual weight than the engineering positions.

==================================================
WEBSITE STRUCTURE
==================================================

HOME
- Concise engineering identity.
- Mechanical Engineering student.
- Vehicle Team Lead.
- AIAA President.
- Fabrication Lab.
- Direct access to major projects.

ABOUT
- Education
- GPA 3.4
- Mechanical design/manufacturing focus
- Aerospace focus
- Leadership
- Dean's List
- Certifications
- Current organizations

PROJECTS
- NASA USLI 2027
- Exoskeleton
- Ancalagon
- Tracking Ground Station
- Wallet

EXPERIENCE
- Fab Lab
- Technical & Outreach Assistant
- Engineering Camp Counselor
- Market Basket

LEADERSHIP
Can live inside About for now rather than creating another navigation page:
- AIAA President
- ASME Treasurer & Design Specialist
- LUNAR Vehicle Team Lead

DO NOT ADD:
- Featured section
- Lamar/LUNAR news article feature

==================================================
SITE-WIDE CLEANUP
==================================================

- Update GPA to 3.4.
- Remove LUNAR Safety Officer as current role.
- Remove ASME Secretary as current role.
- Remove NEST from current organizations.
- Make copyright year consistent/current and preferably generated automatically.
- Do not overstate projects that are still in development.
- Clearly label current/active projects.
- Clearly distinguish current NASA USLI work from previous IREC work.
- Do not attribute Payload Team work to me unless specifically documented.

==================================================
OVERALL POSITIONING
==================================================

The website should now communicate:

MECHANICAL DESIGN & MANUFACTURING
Fab Lab + Senior Design + ASME exoskeleton

AEROSPACE SYSTEMS
LUNAR + NASA USLI + high-power rocketry

TECHNICAL LEADERSHIP
Vehicle Team Lead + AIAA President + ASME leadership + camps/outreach

Use this content as the source of truth while updating the website.
