import * as angular from 'angular';
import { componentName, componentOptions } from './my-component.component';

export const MyModule = angular.module('mymodule', [])
  .component(componentName, componentOptions);