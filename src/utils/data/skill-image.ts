import * as adobeXd from '../../../public/skills/adobe-xd.svg';
import adobeaudition from '../../../public/skills/adobeaudition.svg';
import afterEffects from '../../../public/skills/after-effects.svg';
import angular from '../../../public/skills/angular.svg';
import aws from '../../../public/skills/aws.svg';
import azure from '../../../public/skills/azure.svg';
import blender from '../../../public/skills/blender.svg';
import bootstrap from '../../../public/skills/bootstrap.svg';
import bulma from '../../../public/skills/bulma.svg';
import c from '../../../public/skills/c.svg';
import canva from '../../../public/skills/canva.svg';
import capacitorjs from '../../../public/skills/capacitorjs.svg';
import coffeescript from '../../../public/skills/coffeescript.svg';
import cplusplus from '../../../public/skills/cplusplus.svg';
import csharp from '../../../public/skills/csharp.svg';
import css from '../../../public/skills/css.svg';
import dart from '../../../public/skills/dart.svg';
import deno from '../../../public/skills/deno.svg';
import django from '../../../public/skills/django.svg';
import docker from '../../../public/skills/docker.svg';
import fastify from '../../../public/skills/fastify.svg';
import figma from '../../../public/skills/figma.svg';
import firebase from '../../../public/skills/firebase.svg';
import flutter from '../../../public/skills/flutter.svg';
import gcp from '../../../public/skills/gcp.svg';
import gimp from '../../../public/skills/gimp.svg';
import git from '../../../public/skills/git.svg';
import go from '../../../public/skills/go.svg';
import graphql from '../../../public/skills/graphql.svg';
import haxe from '../../../public/skills/haxe.svg';
import html from '../../../public/skills/html.svg';
import illustrator from '../../../public/skills/illustrator.svg';
import ionic from '../../../public/skills/ionic.svg';
import java from '../../../public/skills/java.svg';
import javascript from '../../../public/skills/javascript.svg';
import julia from '../../../public/skills/julia.svg';
import kotlin from '../../../public/skills/kotlin.svg';
import lightroom from '../../../public/skills/lightroom.svg';
import markdown from '../../../public/skills/markdown.svg';
import materialui from '../../../public/skills/materialui.svg';
import matlab from '../../../public/skills/matlab.svg';
import memsql from '../../../public/skills/memsql.svg';
import microsoftoffice from '../../../public/skills/microsoftoffice.svg';
import mongoDB from '../../../public/skills/mongoDB.svg';
import mysql from '../../../public/skills/mysql.svg';
import nextJS from '../../../public/skills/nextJS.svg';
import nginx from '../../../public/skills/nginx.svg';
import numpy from '../../../public/skills/numpy.svg';
import nuxtJS from '../../../public/skills/nuxtJS.svg';
import opencv from '../../../public/skills/opencv.svg';
import photoshop from '../../../public/skills/photoshop.svg';
import php from '../../../public/skills/php.svg';
import picsart from '../../../public/skills/picsart.svg';
import postgresql from '../../../public/skills/postgresql.svg';
import premierepro from '../../../public/skills/premierepro.svg';
import python from '../../../public/skills/python.svg';
import pytorch from '../../../public/skills/pytorch.svg';
import react from '../../../public/skills/react.svg';
import ruby from '../../../public/skills/ruby.svg';
import selenium from '../../../public/skills/selenium.svg';
import sketch from '../../../public/skills/sketch.svg';
import strapi from '../../../public/skills/strapi.svg';
import svelte from '../../../public/skills/svelte.svg';
import swift from '../../../public/skills/swift.svg';
import tailwind from '../../../public/skills/tailwind.svg';
import tensorflow from '../../../public/skills/tensorflow.svg';
import typescript from '../../../public/skills/typescript.svg';
import unity from '../../../public/skills/unity.svg';
import vitejs from '../../../public/skills/vitejs.svg';
import vue from '../../../public/skills/vue.svg';
import vuetifyjs from '../../../public/skills/vuetifyjs.svg';
import webix from '../../../public/skills/webix.svg';
import wolframalpha from '../../../public/skills/wolframalpha.svg';
import wordpress from '../../../public/skills/wordpress.svg';


export const skillsImage = (skill:any) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'gcp':
      return gcp;
    case 'html':
      return html;
    case 'photoshop':
      return photoshop;
    case 'docker':
      return docker;
    case 'illustrator':
      return illustrator;
    case 'adobe xd':
      return adobeXd;
    case 'after effects':
      return afterEffects;
    case 'css':
      return css;
    case 'angular':
      return angular;
    case 'javascript':
      return javascript;
    case 'next js':
      return nextJS;
    case 'nuxt js':
      return nuxtJS;
    case 'react':
      return react;
    case 'svelte':
      return svelte;
    case 'typescript':
      return typescript;
    case 'vue':
      return vue;
    case 'bootstrap':
      return bootstrap;
    case 'bulma':
      return bulma;
    case 'capacitorjs':
      return capacitorjs;
    case 'coffeescript':
      return coffeescript;
    case 'memsql':
      return memsql;
    case 'mongodb':
      return mongoDB;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'tailwind':
      return tailwind;
    case 'vitejs':
      return vitejs;
    case 'vuetifyjs':
      return vuetifyjs;
    case 'c':
      return c;
    case 'c++':
      return cplusplus;
    case 'c#':
      return csharp;
    case 'dart':
      return dart;
    case 'go':
      return go;
    case 'java':
      return java;
    case 'kotlin':
      return kotlin;
    case 'julia':
      return julia;
    case 'matlab':
      return matlab;
    case 'php':
      return php;
    case 'python':
      return python;
    case 'ruby':
      return ruby;
    case 'swift':
      return swift;
    case 'adobe audition':
      return adobeaudition;
    case 'aws':
      return aws;
    case 'deno':
      return deno;
    case 'django':
      return django;
    case 'firebase':
      return firebase;
    case 'gimp':
      return gimp;
    case 'git':
      return git;
    case 'graphql':
      return graphql;
    case 'lightroom':
      return lightroom;
    case 'materialui':
      return materialui;
    case 'nginx':
      return nginx;
    case 'numpy':
      return numpy;
    case 'opencv':
      return opencv;
    case 'premiere pro':
      return premierepro;
    case 'pytorch':
      return pytorch;
    case 'selenium':
      return selenium;
    case 'strapi':
      return strapi;
    case 'tensorflow':
      return tensorflow;
    case 'webix':
      return webix;
    case 'wordpress':
      return wordpress;
    case 'azure':
      return azure;
    case 'blender':
      return blender;
    case 'fastify':
      return fastify;
    case 'figma':
      return figma;
    case 'flutter':
      return flutter;
    case 'haxe':
      return haxe;
    case 'ionic':
      return ionic;
    case 'markdown':
      return markdown;
    case 'microsoft office':
      return microsoftoffice;
    case 'picsart':
      return picsart;
    case 'sketch':
      return sketch;
    case 'unity':
      return unity;
    case 'wolframalpha':
      return wolframalpha;
    case 'canva':
      return canva;
    default:
      break;
  }
}