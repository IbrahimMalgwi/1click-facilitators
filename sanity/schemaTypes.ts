import { defineType, defineField } from "sanity";

const seo = [
  defineField({name:"seoTitle",title:"SEO title",type:"string",description:"Keep this clear and under about 60 characters."}),
  defineField({name:"seoDescription",title:"SEO description",type:"text",rows:3,description:"A natural summary for search results."})
];

export const schemaTypes = [
  defineType({name:"siteSettings",title:"Site settings",type:"document",fields:[
    defineField({name:"businessName",title:"Business name",type:"string"}),
    defineField({name:"logo",title:"Logo",type:"image"}),
    defineField({name:"phone",title:"Primary phone",type:"string"}),
    defineField({name:"whatsapp",title:"WhatsApp number",type:"string",description:"Include country code, for example 234…"}),
    defineField({name:"email",title:"Enquiry email",type:"string"}),
    defineField({name:"address",title:"Business address",type:"text"}),
    defineField({name:"hours",title:"Business hours",type:"string"}),
    defineField({name:"showCasketPricing",title:"Show casket pricing publicly",type:"boolean",initialValue:false}),
    ...seo
  ]}),
  defineType({name:"founder",title:"Founder profile",type:"document",fields:[
    defineField({name:"name",title:"Name",type:"string"}),
    defineField({name:"role",title:"Role",type:"string"}),
    defineField({name:"portrait",title:"Approved professional portrait",type:"image",options:{hotspot:true}}),
    defineField({name:"shortBio",title:"Short homepage biography",type:"text"}),
    defineField({name:"fullBio",title:"Full biography",type:"array",of:[{type:"block"}]}),
    defineField({name:"credentials",title:"Credentials",type:"array",of:[{type:"string"}]}),
    defineField({name:"quote",title:"Approved founder quote",type:"text"})
  ]}),
  defineType({name:"service",title:"Service",type:"document",fields:[
    defineField({name:"name",title:"Service name",type:"string"}),
    defineField({name:"slug",title:"URL slug",type:"slug",options:{source:"name"}}),
    defineField({name:"arm",title:"Service arm",type:"string",options:{list:["1Click Facilitators","1Click Events","Foto1Click"]}}),
    defineField({name:"summary",title:"Short summary",type:"text"}),
    defineField({name:"body",title:"Full description",type:"array",of:[{type:"block"}]}),
    defineField({name:"heroImage",title:"Hero image",type:"image",options:{hotspot:true}}),
    defineField({name:"inclusions",title:"What is included",type:"array",of:[{type:"string"}]}),
    defineField({name:"process",title:"Process steps",type:"array",of:[{type:"object",fields:[{name:"title",type:"string"},{name:"detail",type:"text"}]}]}),
    ...seo
  ]}),
  defineType({name:"galleryProject",title:"Gallery project",type:"document",fields:[
    defineField({name:"title",title:"Project title",type:"string"}),
    defineField({name:"slug",title:"URL slug",type:"slug",options:{source:"title"}}),
    defineField({name:"category",title:"Category",type:"string",options:{list:["Funerals","Weddings","Birthdays","Vaults & Mausoleums","Photography","Videography"]}}),
    defineField({name:"cover",title:"Cover image",type:"image",options:{hotspot:true},fields:[{name:"alt",title:"Alternative text",type:"string"}]}),
    defineField({name:"gallery",title:"Project images",type:"array",of:[{type:"image",options:{hotspot:true},fields:[{name:"alt",title:"Alternative text",type:"string"}]}]}),
    defineField({name:"description",title:"Project description",type:"text"}),
    defineField({name:"date",title:"Event date",type:"date"}),
    defineField({name:"location",title:"Location",type:"string"}),
    defineField({name:"featured",title:"Feature this project",type:"boolean",initialValue:false}),
    defineField({name:"order",title:"Display order",type:"number"}), ...seo
  ]}),
  defineType({name:"testimonial",title:"Testimonial",type:"document",fields:[
    defineField({name:"clientName",title:"Client name",type:"string"}),
    defineField({name:"serviceType",title:"Service type",type:"string"}),
    defineField({name:"quote",title:"Approved testimonial",type:"text",description:"Only publish words approved by the client."}),
    defineField({name:"featured",title:"Feature on homepage",type:"boolean"}),
    defineField({name:"order",title:"Display order",type:"number"})
  ]}),
  defineType({name:"post",title:"Resource article",type:"document",fields:[
    defineField({name:"title",title:"Title",type:"string"}),
    defineField({name:"slug",title:"URL slug",type:"slug",options:{source:"title"}}),
    defineField({name:"excerpt",title:"Short summary",type:"text"}),
    defineField({name:"cover",title:"Cover image",type:"image",options:{hotspot:true}}),
    defineField({name:"body",title:"Article",type:"array",of:[{type:"block"},{type:"image"}]}),
    defineField({name:"category",title:"Category",type:"string"}),
    defineField({name:"publishedAt",title:"Publication date",type:"datetime"}), ...seo
  ]}),
  defineType({name:"enquiry",title:"Enquiry",type:"document",fields:[
    defineField({name:"name",title:"Name",type:"string"}),defineField({name:"phone",title:"Phone",type:"string"}),
    defineField({name:"email",title:"Email",type:"string"}),defineField({name:"service",title:"Service",type:"string"}),
    defineField({name:"message",title:"Message",type:"text"}),defineField({name:"receivedAt",title:"Received",type:"datetime"}),
    defineField({name:"status",title:"Status",type:"string",options:{list:["New","Contacted","Closed"]},initialValue:"New"}),
    defineField({name:"notes",title:"Admin notes",type:"text"})
  ]})
];
