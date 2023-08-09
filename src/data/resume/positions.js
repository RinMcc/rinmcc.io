const positions = [
  {
    company: 'Stripe',
    position: 'Product Operations',
    link: 'https://stripe.com',
    daterange: 'October 2019 - December 2022',
    points: [
      'Assessed the needs of our vendor support agents and developed new workflows, trainings and tools for our most common issues and worst supported experiences.',
      'Hosted a monthly, one week training session for all new hires to the Operations and Sales org at Stripe in my area of expertise - fraud prevention (Radar).',
      'Provided live training for over 100 new hires in H1 2022. The trained cohort went on to resolve 34.5% of tickets related to Radar within H1 of 2022, total ticket volume was 2194.',
      'Developed new Sales Decks around to outline the value prop of Radar.',
      'I was a "Topic Owner" - an IC directly responsible for the performance of a group of specialists against a predetermined set of targets and metrics for a given product.',
      'Within my first 6 months as a Topic Owner for the Disputes and Lockout teams I developed inline tooling for support agents using Javascript, jQuery, Ajax, HTML and CSS which caused an improvement in time to assign SLA adherence of 13% (68 —> 81%), a decrease in average (mean) time to assign of 28.3 hours to 9.9 hours and an improvement in resolution time from 15.2 days to 10.1 days.',
      'Assisted in the design and roll out of Radar v2.1, a fraud prevention tool from Stripe which uses user constructed rules and a risk score to determine whether a payment should be allowed or not. Radar v2 allowed users to create and update their rule base via the Stripe API, added new attributes to the ML schema and surfaced this information to the user, increased transparency for users through new Dashboard tools which showed them the greatest factors influencing the risk score of a given payment.',
      'Delivered communications and impact analysis of Brexit for our users - created tags and Dashboards to measure the response rates of our outreach using Amazon Redshift (SQL) and Tableau.',
    ],
  },
  {
    company: 'Stripe (Rotation)',
    position: 'Implementation Engineering',
    link: 'https://stripe.com',
    daterange: 'May 2022 - November 2022',
    points: [
      'I worked to support our Sales team by redesigning the anti-fraud rules of a large, newly signed user had on their previous processor (BrainTree). I optimised and recreated their rule base and web hooks in Stripe while helping to onboard and train the user on getting the most out of Stripe.',
      'Assisted in designing and implementing a Stripe to SAP connector while onboarding the same Enterprise user as above. (https://api.sap.com/api/stripe/overview)',
      'Built a gated Radar feature in Ruby which utilised the existing Stripe “Review Rules” but allowed users to set a customisable SLA for when payments needed to be reviewed. This feature was built in Ruby and Javascript, this feature required new LDAP groups / permissions so that “reviewers” had a limited view of the full Smyths Dashboard but had writes permission to allow or refund (cancel) payments. The feature flag added additional fields to the charge class so that web hooks could be configured to listen for any payments which needed a priority review.',
      'Assisted a large user in implementing manual and in-app card provisioning for Stripe issued cards.',
      'Converted multiple user guides to Markdown so that they could be made available on the Stripe Docs website. This included building new view permissions which rely on an account ID rather than a feature flag. Multiple Stripe docs are gated and are only visible if that user has certain feature flags enabled - however, as part of this project we updated this access system to also use account ID credentials alone so that feature flags did not continue to grow to an unmaintainable number. Now users can access their own user guides when logged in to their Stripe Dashboard, and these guides are unaccessible to anyone else. Converting these guides to Markdown enabled us to make use of code snippets with the tokens relevant to the user i.e. their account ID, a payment they processed, one of their actual connected accounts.',
    ],
  },
  {
    company: 'IBM Consulting (formerly IBM Global Business Services)',
    position: 'Consultant',
    link: 'https://www.ibm.com/consulting/',
    daterange: 'August 2018 - September 2019',
    points: [
      'Assisted in a transformation process for the Storm Team, a deal coaching team who deal primarily in contracts with a value over $50m. Throughout the transformation IBM reported a win rate of 48% when deals were coached by Storm, compared to 20% when Storm coaching did not take place.',
      'This increased win rate amounted to approx. $380 million per year.',
      'Automated team-wide weekly metrics reports pulling data from all distribution platforms in a combination of VBA, Python Scrapers, Beautiful Soup, SQL and OpenPyXl — saving hours of labor from analysts.',
    ],
  },
];

export default positions;
