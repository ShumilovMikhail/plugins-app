import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';

export type PluginVersion = {
  svg: string;
  description: string;
  script: string;
  version: string;
};
export interface Plugin {
  slug: string;
  versions: PluginVersion[];
  latestVersion: string | null;
}

@Injectable({ providedIn: 'root' })
export class PluginsService {
  private readonly plugins = new BehaviorSubject<Plugin[]>([
    {
      latestVersion: '0.0',
      slug: 'plugin-nebo',
      versions: [
        {
          version: '0.0',
          svg: '<svg height="51px" width="51px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0{fill:#76C2AF;} .st1{opacity:0.2;fill:#231F20;} .st2{fill:#4F5D73;} .st3{fill:#E0E0D1;} </style> <circle class="st0" cx="32" cy="32" r="32"></circle> <path class="st1" d="M18.4,50.4c-0.8,0.8-2,0.8-2.8,0l0,0c-0.8-0.8-0.8-2,0-2.8l9.9-9.9c0.8-0.8,2-0.8,2.8,0l0,0 c0.8,0.8,0.8,2,0,2.8L18.4,50.4z"></path> <path class="st1" d="M31.1,26.4c-0.8,0.8-2,0.8-2.8,0l0,0c-0.8-0.8-0.8-2,0-2.8l9.9-9.9c0.8-0.8,2-0.8,2.8,0l0,0 c0.8,0.8,0.8,2,0,2.8L31.1,26.4z"></path> <path class="st1" d="M42.5,37.7c-0.8,0.8-2,0.8-2.8,0l0,0c-0.8-0.8-0.8-2,0-2.8l9.9-9.9c0.8-0.8,2-0.8,2.8,0l0,0 c0.8,0.8,0.8,2,0,2.8L42.5,37.7z"></path> <path class="st2" d="M18.4,48.4c-0.8,0.8-2,0.8-2.8,0l0,0c-0.8-0.8-0.8-2,0-2.8l9.9-9.9c0.8-0.8,2-0.8,2.8,0l0,0 c0.8,0.8,0.8,2,0,2.8L18.4,48.4z"></path> <path class="st3" d="M31.1,24.4c-0.8,0.8-2,0.8-2.8,0l0,0c-0.8-0.8-0.8-2,0-2.8l9.9-9.9c0.8-0.8,2-0.8,2.8,0l0,0 c0.8,0.8,0.8,2,0,2.8L31.1,24.4z"></path> <path class="st3" d="M42.5,35.7c-0.8,0.8-2,0.8-2.8,0l0,0c-0.8-0.8-0.8-2,0-2.8l9.9-9.9c0.8-0.8,2-0.8,2.8,0l0,0 c0.8,0.8,0.8,2,0,2.8L42.5,35.7z"></path> <path class="st1" d="M27.9,19.3l-8,8c-4.3,4.3-4.3,11.3,0,15.6l2.8,2.8c4.3,4.3,11.3,4.3,15.6,0l8-8L27.9,19.3z"></path> <path class="st2" d="M27.9,17.7l-8,8c-4.3,4.3-4.3,11.3,0,15.6l2.8,2.8c4.3,4.3,11.3,4.3,15.6,0l8-8L27.9,17.7z"></path> <path class="st1" d="M48.1,40.4c-0.8,0.8-2,0.8-2.8,0L25.5,20.6c-0.8-0.8-0.8-2,0-2.8l0,0c0.8-0.8,2-0.8,2.8,0l19.8,19.8 C48.9,38.4,48.9,39.6,48.1,40.4L48.1,40.4z"></path> <path class="st2" d="M48.1,38.5c-0.8,0.8-2,0.8-2.8,0L25.5,18.7c-0.8-0.8-0.8-2,0-2.8l0,0c0.8-0.8,2-0.8,2.8,0l19.8,19.8 C48.9,36.5,48.9,37.7,48.1,38.5L48.1,38.5z"></path> </g></svg>',
          description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.`,
          script: '',
        },
      ],
    },
    {
      latestVersion: '0.0',
      slug: 'plugin-cola',
      versions: [
        {
          version: '0.0',
          svg: '<svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M373.2 600.3h278.7v8H373.2z" fill="#999999"></path><path d="M512.6 948.3h-9.8c-58.7 0-106.7-48-106.7-106.7v-212h259v176.2c0 78.4-64.2 142.5-142.5 142.5z" fill="#F9C0C0"></path><path d="M511.7 958.8c-40.7 0-79-15.9-108-44.9s-44.9-67.3-44.9-108V209.2h-32.2c-11.4 0-20.7-9.3-20.7-20.7v-17.6c0-11.4 9.3-20.7 20.7-20.7h370.1c11.4 0 20.7 9.3 20.7 20.7v17.6c0 11.4-9.3 20.7-20.7 20.7h-32.2v596.7c0 40.7-15.9 79-44.9 108-28.9 28.9-67.2 44.9-107.9 44.9zM326.6 165.1c-3.2 0-5.7 2.6-5.7 5.7v17.6c0 3.2 2.6 5.7 5.7 5.7h47.2v611.7c0 36.7 14.4 71.3 40.5 97.4 26.1 26.1 60.7 40.5 97.4 40.5s71.3-14.4 97.4-40.5c26.1-26.1 40.5-60.7 40.5-97.4V194.2h47.2c3.2 0 5.7-2.6 5.7-5.7v-17.6c0-3.2-2.6-5.7-5.7-5.7l-370.2-0.1z" fill="#999999"></path><path d="M373.2 193.8h50.7v8h-50.7zM466.8 193.8h185.1v8H466.8z" fill="#999999"></path><path d="M535.7 558.5c-14.1 0-25.5-11.4-25.5-25.5s11.4-25.5 25.5-25.5 25.5 11.4 25.5 25.5c0 14-11.4 25.5-25.5 25.5z m0-43c-9.6 0-17.5 7.8-17.5 17.5 0 9.6 7.8 17.5 17.5 17.5s17.5-7.8 17.5-17.5-7.9-17.5-17.5-17.5zM458.1 417.6c-21.3 0-38.6-17.3-38.6-38.6s17.3-38.6 38.6-38.6 38.6 17.3 38.6 38.6-17.3 38.6-38.6 38.6z m0-69.2c-16.9 0-30.6 13.7-30.6 30.6s13.7 30.6 30.6 30.6 30.6-13.7 30.6-30.6-13.7-30.6-30.6-30.6zM566.7 107.3c-11.4 0-20.7-9.3-20.7-20.7s9.3-20.7 20.7-20.7 20.7 9.3 20.7 20.7-9.2 20.7-20.7 20.7z m0-33.4c-7 0-12.7 5.7-12.7 12.7s5.7 12.7 12.7 12.7 12.7-5.7 12.7-12.7-5.7-12.7-12.7-12.7zM540.5 299.5c-16.7 0-30.3-13.6-30.3-30.3s13.6-30.3 30.3-30.3 30.3 13.6 30.3 30.3-13.6 30.3-30.3 30.3z m0-52.6c-12.3 0-22.3 10-22.3 22.3s10 22.3 22.3 22.3 22.3-10 22.3-22.3-10-22.3-22.3-22.3z" fill="#CE0202"></path></g></svg>',
          description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.`,
          script: '',
        },
      ],
    },
    {
      latestVersion: '0.0',
      slug: 'plugin-site',
      versions: [
        {
          svg: '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.998 511.998" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <circle style="fill:#ECF0F1;" cx="255.999" cy="255.999" r="255.999"></circle> <circle style="fill:#21D0C3;" cx="255.999" cy="255.999" r="255.999"></circle> <path style="fill:#FFFFFF;" d="M89.572,61.491h332.855h49.549c6.004,0,10.917,4.914,10.917,10.917v64.959v237.268 c-95.571,182.405-358.215,182.405-453.784-0.002V137.37V72.409c0-6.004,4.912-10.917,10.917-10.917h49.549L89.572,61.491z"></path> <g> <path style="fill:#ECF0F1;" d="M65.656,390.689h81.948v4.992H65.656V390.689z M65.656,415.016h58.047v4.992H65.656V415.016z M65.656,402.852h81.948v4.992H65.656V402.852z"></path> <path style="fill:#ECF0F1;" d="M215.025,390.689h81.948v4.992h-81.948L215.025,390.689L215.025,390.689z M215.025,415.016h58.047 v4.992h-58.047V415.016z M215.025,402.852h81.948v4.992h-81.948L215.025,402.852L215.025,402.852z"></path> </g> <path style="fill:#FF5B62;" d="M203.036,289.015h105.928v84.207H203.036V289.015z"></path> <path style="fill:#21D0C3;" d="M53.668,289.015h105.928v84.207H53.668V289.015z"></path> <path style="fill:#828282;" d="M40.023,61.491h431.951c6.004,0,10.917,4.912,10.917,10.917v21.83H29.106v-21.83 C29.106,66.403,34.018,61.491,40.023,61.491z"></path> <path style="fill:#FFFFFF;" d="M231.13,72.798h219.201c1.62,0,2.932,1.312,2.932,2.932v5.441c0,1.62-1.312,2.932-2.932,2.932H231.13 c-1.62,0-2.932-1.312-2.932-2.932V75.73C228.197,74.11,229.51,72.798,231.13,72.798z"></path> <circle style="fill:#15BDB2;" cx="50.881" cy="77.129" r="6.286"></circle> <circle style="fill:#FAD24D;" cx="75.692" cy="77.129" r="6.286"></circle> <circle style="fill:#FF5B62;" cx="100.503" cy="77.129" r="6.286"></circle> <rect x="53.668" y="106.242" style="fill:#ECF0F1;" width="404.668" height="133.489"></rect> <path style="fill:#FAD24D;" d="M422.977,281.373l11.688-15.676l27.483,15.868l-7.741,17.983c5.327,4.405,10.226,9.307,14.633,14.633 l17.983-7.741l15.868,27.483l-15.676,11.688c2.388,6.405,4.189,13.096,5.347,20.007l19.436,2.287v31.737l-19.436,2.287 c-1.156,6.909-2.956,13.599-5.347,20.007l15.676,11.688l-15.868,27.483l-17.985-7.741c-4.405,5.327-9.307,10.226-14.633,14.633 l7.741,17.983l-27.483,15.868l-11.69-15.676c-6.405,2.388-13.096,4.189-20.007,5.347l-2.286,19.436h-31.737l-2.286-19.436 c-6.909-1.156-13.599-2.956-20.007-5.347l-11.688,15.676l-27.483-15.868l7.741-17.985c-5.327-4.405-10.226-9.307-14.633-14.633 l-17.983,7.741l-15.868-27.483l15.676-11.69c-2.388-6.405-4.189-13.096-5.347-20.007l-19.436-2.286V367.9l19.436-2.286 c1.156-6.91,2.956-13.599,5.347-20.007l-15.676-11.688l15.868-27.483l17.985,7.741c4.405-5.327,9.307-10.226,14.633-14.633 l-7.741-17.983l27.483-15.868l11.69,15.676c6.405-2.388,13.096-4.189,20.007-5.347l2.287-19.436h31.737l2.287,19.436 c6.907,1.156,13.601,2.956,20.007,5.347L422.977,281.373L422.977,281.373z"></path> <circle style="fill:#ECF0F1;" cx="384.817" cy="383.769" r="94.106"></circle> <circle style="fill:#FFFFFF;" cx="384.817" cy="383.769" r="90.044"></circle> <path style="fill:#21D0C3;" d="M381.304,303.964h6.063v-10.186c-0.846-0.029-1.535-0.051-2.549-0.051s-2.348,0.031-3.514,0.088 v10.151L381.304,303.964L381.304,303.964z"></path> <path style="fill:#FAD24D;" d="M381.277,314.503h6.118c1.468,0,2.668-1.2,2.668-2.668v-6.311c0-1.466-1.2-2.668-2.668-2.668h-6.118 c-1.468,0-2.668,1.202-2.668,2.668v6.311C378.609,313.304,379.811,314.503,381.277,314.503z"></path> <path style="fill:#21D0C3;" d="M359.408,355.648h50.824v-29.454c0-9-7.362-16.362-16.362-16.362h-18.1 c-8.998,0-16.362,7.362-16.362,16.362L359.408,355.648L359.408,355.648z"></path> <g> <path style="fill:#FAD24D;" d="M358.175,358.728h53.289c2.075,0,3.773-1.696,3.773-3.773l0,0c0-2.075-1.698-3.773-3.773-3.773 h-53.289c-2.075,0-3.773,1.698-3.773,3.773l0,0C354.402,357.032,356.1,358.728,358.175,358.728z"></path> <path style="fill:#FAD24D;" d="M369.715,366.057h0.948c1.751,0,3.182,1.433,3.182,3.18v26.271c0,1.749-1.431,3.18-3.182,3.18 h-0.948c-1.749,0-3.182-1.431-3.182-3.18v-26.271C366.534,367.488,367.967,366.057,369.715,366.057z"></path> <path style="fill:#FAD24D;" d="M397.82,366.057h0.948c1.749,0,3.182,1.433,3.182,3.18v26.271c0,1.749-1.433,3.18-3.182,3.18h-0.948 c-1.749,0-3.18-1.431-3.18-3.18v-26.271C394.641,367.488,396.072,366.057,397.82,366.057z"></path> </g> <path style="fill:#21D0C3;" d="M381.304,448.214h6.063v25.559c-0.846,0.029-1.535,0.049-2.549,0.049s-2.348-0.031-3.512-0.084 v-25.523h-0.002V448.214z"></path> <path style="fill:#FAD24D;" d="M381.277,437.672h6.118c1.468,0,2.668,1.202,2.668,2.67v6.311c0,1.468-1.2,2.668-2.668,2.668h-6.118 c-1.468,0-2.668-1.2-2.668-2.668v-6.311C378.609,438.874,379.809,437.672,381.277,437.672z"></path> <path style="fill:#21D0C3;" d="M359.408,396.528h50.824v29.454c0,9-7.362,16.362-16.362,16.362h-18.1 c-8.998,0-16.362-7.362-16.362-16.362L359.408,396.528L359.408,396.528z"></path> <path style="fill:#FAD24D;" d="M358.175,393.448h53.289c2.073,0,3.773,1.698,3.773,3.773l0,0c0,2.075-1.698,3.773-3.773,3.773 h-53.289c-2.075,0-3.773-1.696-3.773-3.773l0,0C354.402,395.146,356.1,393.448,358.175,393.448z"></path> </g></svg>',
          description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.`,
          script: '',
          version: '0.0',
        },
      ],
    },
    {
      latestVersion: '1.2',
      slug: 'plugin-xueta',
      versions: [
        {
          svg: '<svg viewBox="0 0 100 100" enable-background="new 0 0 100 100" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect clip-rule="evenodd" fill="#39B6CC" fill-rule="evenodd" height="59.668" width="83.471" x="8.264" y="12.895"></rect> <path d="M91.734,73.921H8.264c-0.75,0-1.359-0.608-1.359-1.358V12.895c0-0.75,0.609-1.359,1.359-1.359h83.471 c0.752,0,1.359,0.608,1.359,1.359v59.668C93.094,73.313,92.486,73.921,91.734,73.921z M9.623,71.204h80.754V14.253H9.623V71.204z"></path> </g> <g> <polygon clip-rule="evenodd" fill="#F2F2F2" fill-rule="evenodd" points="33.93,80.07 66.07,80.07 63.266,72.563 36.729,72.563 "></polygon> <path d="M66.07,81.428H33.93c-0.445,0-0.861-0.218-1.115-0.583c-0.254-0.366-0.313-0.833-0.158-1.25l2.799-7.507 c0.199-0.531,0.707-0.884,1.273-0.884h26.537c0.566,0,1.074,0.352,1.273,0.883l2.803,7.507c0.156,0.417,0.098,0.884-0.156,1.25 S66.514,81.428,66.07,81.428z M35.887,78.711h28.225l-1.789-4.791h-24.65L35.887,78.711z"></path> </g> <g> <rect clip-rule="evenodd" fill="#39B6CC" fill-rule="evenodd" height="7.036" width="48.1" x="25.947" y="80.07"></rect> <path d="M74.047,88.464h-48.1c-0.75,0-1.359-0.608-1.359-1.359V80.07c0-0.75,0.609-1.358,1.359-1.358h48.1 c0.752,0,1.359,0.608,1.359,1.358v7.036C75.406,87.856,74.799,88.464,74.047,88.464z M27.305,85.747h45.385v-4.319H27.305V85.747z "></path> </g> <g> <rect clip-rule="evenodd" fill="#F2F2F2" fill-rule="evenodd" height="42.177" width="83.471" x="8.264" y="21.58"></rect> <path d="M91.734,65.115H8.264c-0.75,0-1.359-0.608-1.359-1.358V21.58c0-0.75,0.609-1.359,1.359-1.359h83.471 c0.752,0,1.359,0.608,1.359,1.359v42.177C93.094,64.507,92.486,65.115,91.734,65.115z M9.623,62.398h80.754v-39.46H9.623V62.398z"></path> </g> <g> <path clip-rule="evenodd" d="M20.205,30.361c-0.293,2.01-0.188,7.709-0.072,9.912 c0.289,5.463,3.111,9.863,6.68,13.278c0.693,0.664,4.676,4.044,5.781,4.131c2.01,0.149,8.295-5.863,10.324-9.475 c2.529-4.501,2.973-11.436,2.338-17.751c-0.813-0.235-11.57-2.549-12.461-2.549L20.205,30.361z" fill="#FF7C24" fill-rule="evenodd"></path> <path d="M32.668,59.044L32.668,59.044c-0.059,0-0.119-0.002-0.176-0.006c-0.586-0.046-1.443-0.335-3.773-2.127 c-1.209-0.932-2.43-1.979-2.846-2.378c-4.436-4.245-6.824-9.018-7.098-14.188c-0.107-2.079-0.238-7.96,0.084-10.18L19,29.212 l13.664-2.662h0.131c1.197,0,12.225,2.424,12.838,2.603l0.883,0.256l0.092,0.913c0.449,4.465,0.721,12.813-2.506,18.552 C42.221,52.223,35.74,59.044,32.668,59.044z M21.457,31.501c-0.152,2.343-0.072,6.71,0.033,8.701 c0.234,4.456,2.342,8.617,6.262,12.368c0.949,0.91,4.047,3.404,4.963,3.748c0.393-0.088,1.799-0.773,4.271-3.11 c2.025-1.913,3.889-4.137,4.748-5.665c1.992-3.547,2.803-9.337,2.258-15.992c-2.611-0.592-9.861-2.121-11.119-2.273L21.457,31.501 z"></path> </g> <g> <path d="M30.732,46.826c-0.4,0-0.779-0.175-1.037-0.48l-3.707-4.376c-0.486-0.572-0.414-1.43,0.158-1.915 c0.572-0.485,1.43-0.414,1.914,0.159l2.637,3.111l6.453-8.15c0.465-0.588,1.32-0.688,1.908-0.222s0.688,1.32,0.223,1.908 l-7.484,9.45c-0.252,0.319-0.635,0.508-1.043,0.515C30.746,46.826,30.74,46.826,30.732,46.826z" fill="#F2F2F2"></path> </g> <g> <rect clip-rule="evenodd" fill="#39B6CC" fill-rule="evenodd" height="8.561" width="26.064" x="54.096" y="28.385"></rect> </g> <g> <rect height="2.717" width="26.064" x="54.096" y="40.17"></rect> </g> <g> <rect height="2.717" width="18.504" x="54.096" y="46.763"></rect> </g> <g> <rect height="2.717" width="18.615" x="54.096" y="53.419"></rect> </g> <g> <rect height="2.717" width="3.793" x="74.977" y="46.763"></rect> </g> <g> <rect fill="#F2F2F2" height="2.717" width="3.266" x="83.17" y="66.63"></rect> </g> </g> </g></svg>',
          description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.`,
          script: '',
          version: '1.0',
        },
        {
          svg: '<svg viewBox="0 0 100 100" enable-background="new 0 0 100 100" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect clip-rule="evenodd" fill="#39B6CC" fill-rule="evenodd" height="59.668" width="83.471" x="8.264" y="12.895"></rect> <path d="M91.734,73.921H8.264c-0.75,0-1.359-0.608-1.359-1.358V12.895c0-0.75,0.609-1.359,1.359-1.359h83.471 c0.752,0,1.359,0.608,1.359,1.359v59.668C93.094,73.313,92.486,73.921,91.734,73.921z M9.623,71.204h80.754V14.253H9.623V71.204z"></path> </g> <g> <polygon clip-rule="evenodd" fill="#F2F2F2" fill-rule="evenodd" points="33.93,80.07 66.07,80.07 63.266,72.563 36.729,72.563 "></polygon> <path d="M66.07,81.428H33.93c-0.445,0-0.861-0.218-1.115-0.583c-0.254-0.366-0.313-0.833-0.158-1.25l2.799-7.507 c0.199-0.531,0.707-0.884,1.273-0.884h26.537c0.566,0,1.074,0.352,1.273,0.883l2.803,7.507c0.156,0.417,0.098,0.884-0.156,1.25 S66.514,81.428,66.07,81.428z M35.887,78.711h28.225l-1.789-4.791h-24.65L35.887,78.711z"></path> </g> <g> <rect clip-rule="evenodd" fill="#39B6CC" fill-rule="evenodd" height="7.036" width="48.1" x="25.947" y="80.07"></rect> <path d="M74.047,88.464h-48.1c-0.75,0-1.359-0.608-1.359-1.359V80.07c0-0.75,0.609-1.358,1.359-1.358h48.1 c0.752,0,1.359,0.608,1.359,1.358v7.036C75.406,87.856,74.799,88.464,74.047,88.464z M27.305,85.747h45.385v-4.319H27.305V85.747z "></path> </g> <g> <rect clip-rule="evenodd" fill="#F2F2F2" fill-rule="evenodd" height="42.177" width="83.471" x="8.264" y="21.58"></rect> <path d="M91.734,65.115H8.264c-0.75,0-1.359-0.608-1.359-1.358V21.58c0-0.75,0.609-1.359,1.359-1.359h83.471 c0.752,0,1.359,0.608,1.359,1.359v42.177C93.094,64.507,92.486,65.115,91.734,65.115z M9.623,62.398h80.754v-39.46H9.623V62.398z"></path> </g> <g> <path clip-rule="evenodd" d="M20.205,30.361c-0.293,2.01-0.188,7.709-0.072,9.912 c0.289,5.463,3.111,9.863,6.68,13.278c0.693,0.664,4.676,4.044,5.781,4.131c2.01,0.149,8.295-5.863,10.324-9.475 c2.529-4.501,2.973-11.436,2.338-17.751c-0.813-0.235-11.57-2.549-12.461-2.549L20.205,30.361z" fill="#FF7C24" fill-rule="evenodd"></path> <path d="M32.668,59.044L32.668,59.044c-0.059,0-0.119-0.002-0.176-0.006c-0.586-0.046-1.443-0.335-3.773-2.127 c-1.209-0.932-2.43-1.979-2.846-2.378c-4.436-4.245-6.824-9.018-7.098-14.188c-0.107-2.079-0.238-7.96,0.084-10.18L19,29.212 l13.664-2.662h0.131c1.197,0,12.225,2.424,12.838,2.603l0.883,0.256l0.092,0.913c0.449,4.465,0.721,12.813-2.506,18.552 C42.221,52.223,35.74,59.044,32.668,59.044z M21.457,31.501c-0.152,2.343-0.072,6.71,0.033,8.701 c0.234,4.456,2.342,8.617,6.262,12.368c0.949,0.91,4.047,3.404,4.963,3.748c0.393-0.088,1.799-0.773,4.271-3.11 c2.025-1.913,3.889-4.137,4.748-5.665c1.992-3.547,2.803-9.337,2.258-15.992c-2.611-0.592-9.861-2.121-11.119-2.273L21.457,31.501 z"></path> </g> <g> <path d="M30.732,46.826c-0.4,0-0.779-0.175-1.037-0.48l-3.707-4.376c-0.486-0.572-0.414-1.43,0.158-1.915 c0.572-0.485,1.43-0.414,1.914,0.159l2.637,3.111l6.453-8.15c0.465-0.588,1.32-0.688,1.908-0.222s0.688,1.32,0.223,1.908 l-7.484,9.45c-0.252,0.319-0.635,0.508-1.043,0.515C30.746,46.826,30.74,46.826,30.732,46.826z" fill="#F2F2F2"></path> </g> <g> <rect clip-rule="evenodd" fill="#39B6CC" fill-rule="evenodd" height="8.561" width="26.064" x="54.096" y="28.385"></rect> </g> <g> <rect height="2.717" width="26.064" x="54.096" y="40.17"></rect> </g> <g> <rect height="2.717" width="18.504" x="54.096" y="46.763"></rect> </g> <g> <rect height="2.717" width="18.615" x="54.096" y="53.419"></rect> </g> <g> <rect height="2.717" width="3.793" x="74.977" y="46.763"></rect> </g> <g> <rect fill="#F2F2F2" height="2.717" width="3.266" x="83.17" y="66.63"></rect> </g> </g> </g></svg>',
          description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.`,
          script: '',
          version: '1.1',
        },
        {
          svg: '<svg viewBox="0 0 100 100" enable-background="new 0 0 100 100" id="Layer_1" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <rect clip-rule="evenodd" fill="#39B6CC" fill-rule="evenodd" height="59.668" width="83.471" x="8.264" y="12.895"></rect> <path d="M91.734,73.921H8.264c-0.75,0-1.359-0.608-1.359-1.358V12.895c0-0.75,0.609-1.359,1.359-1.359h83.471 c0.752,0,1.359,0.608,1.359,1.359v59.668C93.094,73.313,92.486,73.921,91.734,73.921z M9.623,71.204h80.754V14.253H9.623V71.204z"></path> </g> <g> <polygon clip-rule="evenodd" fill="#F2F2F2" fill-rule="evenodd" points="33.93,80.07 66.07,80.07 63.266,72.563 36.729,72.563 "></polygon> <path d="M66.07,81.428H33.93c-0.445,0-0.861-0.218-1.115-0.583c-0.254-0.366-0.313-0.833-0.158-1.25l2.799-7.507 c0.199-0.531,0.707-0.884,1.273-0.884h26.537c0.566,0,1.074,0.352,1.273,0.883l2.803,7.507c0.156,0.417,0.098,0.884-0.156,1.25 S66.514,81.428,66.07,81.428z M35.887,78.711h28.225l-1.789-4.791h-24.65L35.887,78.711z"></path> </g> <g> <rect clip-rule="evenodd" fill="#39B6CC" fill-rule="evenodd" height="7.036" width="48.1" x="25.947" y="80.07"></rect> <path d="M74.047,88.464h-48.1c-0.75,0-1.359-0.608-1.359-1.359V80.07c0-0.75,0.609-1.358,1.359-1.358h48.1 c0.752,0,1.359,0.608,1.359,1.358v7.036C75.406,87.856,74.799,88.464,74.047,88.464z M27.305,85.747h45.385v-4.319H27.305V85.747z "></path> </g> <g> <rect clip-rule="evenodd" fill="#F2F2F2" fill-rule="evenodd" height="42.177" width="83.471" x="8.264" y="21.58"></rect> <path d="M91.734,65.115H8.264c-0.75,0-1.359-0.608-1.359-1.358V21.58c0-0.75,0.609-1.359,1.359-1.359h83.471 c0.752,0,1.359,0.608,1.359,1.359v42.177C93.094,64.507,92.486,65.115,91.734,65.115z M9.623,62.398h80.754v-39.46H9.623V62.398z"></path> </g> <g> <path clip-rule="evenodd" d="M20.205,30.361c-0.293,2.01-0.188,7.709-0.072,9.912 c0.289,5.463,3.111,9.863,6.68,13.278c0.693,0.664,4.676,4.044,5.781,4.131c2.01,0.149,8.295-5.863,10.324-9.475 c2.529-4.501,2.973-11.436,2.338-17.751c-0.813-0.235-11.57-2.549-12.461-2.549L20.205,30.361z" fill="#FF7C24" fill-rule="evenodd"></path> <path d="M32.668,59.044L32.668,59.044c-0.059,0-0.119-0.002-0.176-0.006c-0.586-0.046-1.443-0.335-3.773-2.127 c-1.209-0.932-2.43-1.979-2.846-2.378c-4.436-4.245-6.824-9.018-7.098-14.188c-0.107-2.079-0.238-7.96,0.084-10.18L19,29.212 l13.664-2.662h0.131c1.197,0,12.225,2.424,12.838,2.603l0.883,0.256l0.092,0.913c0.449,4.465,0.721,12.813-2.506,18.552 C42.221,52.223,35.74,59.044,32.668,59.044z M21.457,31.501c-0.152,2.343-0.072,6.71,0.033,8.701 c0.234,4.456,2.342,8.617,6.262,12.368c0.949,0.91,4.047,3.404,4.963,3.748c0.393-0.088,1.799-0.773,4.271-3.11 c2.025-1.913,3.889-4.137,4.748-5.665c1.992-3.547,2.803-9.337,2.258-15.992c-2.611-0.592-9.861-2.121-11.119-2.273L21.457,31.501 z"></path> </g> <g> <path d="M30.732,46.826c-0.4,0-0.779-0.175-1.037-0.48l-3.707-4.376c-0.486-0.572-0.414-1.43,0.158-1.915 c0.572-0.485,1.43-0.414,1.914,0.159l2.637,3.111l6.453-8.15c0.465-0.588,1.32-0.688,1.908-0.222s0.688,1.32,0.223,1.908 l-7.484,9.45c-0.252,0.319-0.635,0.508-1.043,0.515C30.746,46.826,30.74,46.826,30.732,46.826z" fill="#F2F2F2"></path> </g> <g> <rect clip-rule="evenodd" fill="#39B6CC" fill-rule="evenodd" height="8.561" width="26.064" x="54.096" y="28.385"></rect> </g> <g> <rect height="2.717" width="26.064" x="54.096" y="40.17"></rect> </g> <g> <rect height="2.717" width="18.504" x="54.096" y="46.763"></rect> </g> <g> <rect height="2.717" width="18.615" x="54.096" y="53.419"></rect> </g> <g> <rect height="2.717" width="3.793" x="74.977" y="46.763"></rect> </g> <g> <rect fill="#F2F2F2" height="2.717" width="3.266" x="83.17" y="66.63"></rect> </g> </g> </g></svg>',
          description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.`,
          script: '',
          version: '1.2',
        },
      ],
    },
    {
      latestVersion: '0.0',
      slug: 'plugin-good',
      versions: [
        {
          svg: '<svg viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M86.8392157,256 L169.160784,256 L169.160784,193.756863 L149.082353,173.678431 L106.415686,173.678431 L86.8392157,193.756863 L86.8392157,256 Z M193.254902,86.8392157 L173.678431,106.415686 L173.678431,149.584314 L193.254902,169.160784 L256,169.160784 L256,86.8392157 L193.254902,86.8392157 Z M169.160784,0 L86.8392157,0 L86.8392157,62.745098 L106.415686,82.3215686 L149.082353,82.3215686 L169.160784,62.745098 L169.160784,0 Z M256,256 L256,193.756863 L236.423529,173.678431 L173.678431,173.678431 L173.678431,256 L256,256 Z M19.5764706,0 L0,19.5764706 L0,82.3215686 L82.3215686,82.3215686 L82.3215686,0 L19.5764706,0 Z M173.678431,0 L173.678431,62.745098 L193.254902,82.3215686 L256,82.3215686 L256,0 L173.678431,0 Z M128,140.047059 C121.47451,140.047059 116.454902,134.52549 116.454902,128.501961 C116.454902,121.976471 121.976471,116.956863 128,116.956863 C134.52549,116.956863 139.545098,122.478431 139.545098,128.501961 C139.545098,134.52549 134.52549,140.047059 128,140.047059 Z M82.3215686,86.8392157 L0,86.8392157 L0,169.160784 L62.2431373,169.160784 L82.3215686,149.584314 L82.3215686,86.8392157 Z M82.3215686,193.756863 L62.2431373,173.678431 L0,173.678431 L0,256 L62.2431373,256 L82.3215686,236.423529 L82.3215686,193.756863 Z" fill="#40BAC8"> </path> </g> </g></svg>',
          description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.`,
          script: '',
          version: '0.0',
        },
      ],
    },
    {
      latestVersion: '0.0',
      slug: 'plugin-taburetka',
      versions: [
        {
          svg: '<svg viewBox="-8 0 272 272" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M0.0996108949,45.522179 L125.908171,0.697276265 L255.103502,44.7252918 L234.185214,211.175097 L125.908171,271.140856 L19.3245136,211.971984 L0.0996108949,45.522179 Z" fill="#E23237"> </path> <path d="M255.103502,44.7252918 L125.908171,0.697276265 L125.908171,271.140856 L234.185214,211.274708 L255.103502,44.7252918 L255.103502,44.7252918 Z" fill="#B52E31"> </path> <path d="M126.107393,32.27393 L126.107393,32.27393 L47.7136187,206.692607 L76.9992218,206.194553 L92.7377432,166.848249 L126.207004,166.848249 L126.306615,166.848249 L163.063035,166.848249 L180.29572,206.692607 L208.286381,207.190661 L126.107393,32.27393 L126.107393,32.27393 Z M126.306615,88.155642 L152.803113,143.5393 L127.402335,143.5393 L126.107393,143.5393 L102.997665,143.5393 L126.306615,88.155642 L126.306615,88.155642 Z" fill="#FFFFFF"> </path> </g> </g></svg>',
          description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.`,
          script: '',
          version: '0.0',
        },
      ],
    },
  ]);
  public readonly plugins$: Observable<Plugin[]> = this.plugins.asObservable();

  public addNewPlugin(newPlugin: Plugin): void {
    this.plugins.next([...this.plugins.getValue(), newPlugin]);
  }

  public addNewPluginVersion(
    slug: string,
    newPluginVersion: PluginVersion,
  ): void {
    const foundPlugin: Plugin | undefined = this.plugins
      .getValue()
      .find((plugin: Plugin) => plugin.slug === slug);
    if (!foundPlugin) return;
    foundPlugin.latestVersion = newPluginVersion.version;
    foundPlugin.versions.push(newPluginVersion);
  }

  public getPlugin(slug: string): Observable<Plugin | undefined> {
    return this.plugins.pipe(
      map((plugins: Plugin[]) =>
        plugins.find((plugin: Plugin) => plugin.slug === slug),
      ),
    );
  }

  public deletePlugin(slug: string): void {
    const newPluginsList = this.plugins
      .getValue()
      .filter((plugin: Plugin) => plugin.slug !== slug);
    this.plugins.next(newPluginsList);
  }

  public deletePluginVersion(slug: string, version: string): boolean {
    const foundPlugin = this.plugins
      .getValue()
      .find((plugin: Plugin) => plugin.slug === slug);
    if (!foundPlugin) return false;
    foundPlugin.versions = foundPlugin.versions.filter(
      (pluginVersion: PluginVersion) => pluginVersion.version !== version,
    );
    foundPlugin.latestVersion =
      foundPlugin.versions[foundPlugin.versions.length - 1].version || null;
    return true;
  }
}
