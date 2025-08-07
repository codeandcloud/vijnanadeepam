import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { provideServerRendering, withRoutes } from '@angular/ssr';

import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

import { CustomTitleStrategy } from './core/services/custom-title-strategy';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    { provide: TitleStrategy, useClass: CustomTitleStrategy },
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
