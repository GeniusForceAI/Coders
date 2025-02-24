"use strict";(self.webpackChunkshippi=self.webpackChunkshippi||[]).push([[5610],{3758:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});var r=s(6540),a=s(1410);const n={container:"container_Dhz1",header:"header_TXly",searchContainer:"searchContainer_RSh9",searchBox:"searchBox_UDx_",searchIcon:"searchIcon_ncg0",searchInput:"searchInput_otak",searchTypeSelect:"searchTypeSelect_oBrD",grid:"grid_g0zK",card:"card_l7ZF",videoWrapper:"videoWrapper_PonH",videoContainer:"videoContainer_IoYq",video:"video_O7On",content:"content_QtxV",courseLevel:"courseLevel_y7u5",title:"title_sNrj",description:"description_45UV",metadataContainer:"metadataContainer_dw23",metadata:"metadata_eXQw",metaItem:"metaItem_DDWH",learnMore:"learnMore_FvNJ"};var i=s(4848);function o(){return(0,i.jsxs)("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm0 2A10 10 0 1 1 11 1a10 10 0 0 1 0 20z",fill:"currentColor"}),(0,i.jsx)("path",{d:"M20.293 19.293L16 15a1 1 0 0 0-1.414 1.414l4.293 4.293a1 1 0 0 0 1.414-1.414z",fill:"currentColor"})]})}function l(){return(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm.5-9.5h-1v5l4.4 2.6.6-.9-4-2.3V4.5z",fill:"currentColor"})})}function c(){return(0,i.jsx)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"M8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z",fill:"currentColor"})})}const d=[{title:"AI Development Fundamentals",description:"Master the basics of AI development with practical examples and real-world applications. Learn to build and deploy AI solutions.",videoId:"to9iVovmBmo",duration:"2 hours",level:"Beginner",instructor:'Maya "Vector" Rodriguez'},{title:"Revenue Generation with AI Tools",description:"Learn how to build and monetize AI tools that solve real business problems. Create profitable solutions that scale.",videoId:"to9iVovmBmo",duration:"3 hours",level:"Intermediate",instructor:'Marcus "Catalyst" Chen'},{title:"Advanced AI Systems Design",description:"Deep dive into building scalable AI systems and architectures. Master advanced concepts and implementations.",videoId:"to9iVovmBmo",duration:"4 hours",level:"Advanced",instructor:'Sage "Architect" Zhang'}];function h(e){let{onSearch:t}=e;const[s,a]=(0,r.useState)(""),[l,c]=(0,r.useState)("all"),d=(e,s)=>{a(e),c(s),t({text:e,type:s})};return(0,i.jsx)("div",{className:n.searchContainer,children:(0,i.jsxs)("div",{className:n.searchBox,children:[(0,i.jsx)(o,{}),(0,i.jsx)("input",{type:"text",placeholder:"Search courses by title, description, or instructor...",onChange:e=>d(e.target.value,l),className:n.searchInput}),(0,i.jsxs)("select",{className:n.searchTypeSelect,value:l,onChange:e=>d(s,e.target.value),children:[(0,i.jsx)("option",{value:"all",children:"All Levels"}),(0,i.jsx)("option",{value:"Beginner",children:"Beginner"}),(0,i.jsx)("option",{value:"Intermediate",children:"Intermediate"}),(0,i.jsx)("option",{value:"Advanced",children:"Advanced"})]})]})})}function u(e){let{course:t}=e;return(0,i.jsxs)("div",{className:n.card,children:[(0,i.jsx)("div",{className:n.videoWrapper,children:(0,i.jsx)("div",{className:n.videoContainer,children:(0,i.jsx)("iframe",{className:n.video,src:`https://www.youtube.com/embed/${t.videoId}`,title:t.title,frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})})}),(0,i.jsxs)("div",{className:n.content,children:[(0,i.jsx)("div",{className:n.courseLevel,children:t.level}),(0,i.jsx)("h3",{className:n.title,children:t.title}),(0,i.jsx)("p",{className:n.description,children:t.description}),(0,i.jsxs)("div",{className:n.metadataContainer,children:[(0,i.jsxs)("div",{className:n.metadata,children:[(0,i.jsxs)("div",{className:n.metaItem,children:[(0,i.jsx)(l,{}),(0,i.jsx)("span",{children:t.duration})]}),(0,i.jsxs)("div",{className:n.metaItem,children:[(0,i.jsx)(c,{}),(0,i.jsx)("span",{children:t.instructor})]})]}),(0,i.jsx)("button",{className:n.learnMore,children:"Learn More"})]})]})]})}function v(){const[e,t]=(0,r.useState)({text:"",type:"all"}),s=d.filter((t=>{const s=e.text.toLowerCase(),r=""===s||t.title.toLowerCase().includes(s)||t.description.toLowerCase().includes(s)||t.instructor.toLowerCase().includes(s),a="all"===e.type||t.level===e.type;return r&&a}));return(0,i.jsx)(a.A,{title:"Courses",description:"Learn AI development through our comprehensive courses",children:(0,i.jsxs)("main",{className:n.container,children:[(0,i.jsxs)("div",{className:n.header,children:[(0,i.jsx)("h1",{children:"Interactive Courses"}),(0,i.jsx)("p",{children:"Master AI development through our comprehensive video courses and hands-on tutorials"}),(0,i.jsx)(h,{onSearch:t})]}),(0,i.jsx)("div",{className:n.grid,children:s.map(((e,t)=>(0,i.jsx)(u,{course:e},t)))})]})})}}}]);