import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { RamaadminapiSharedModule, UserRouteAccessService } from './shared';
import { RamaadminapiAppRoutingModule} from './app-routing.module';
import { RamaadminapiHomeModule } from './home/home.module';
import { RamaadminapiAdminModule } from './admin/admin.module';
import { RamaadminapiAccountModule } from './account/account.module';
import { RamaadminapiEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        RamaadminapiAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        RamaadminapiSharedModule,
        RamaadminapiHomeModule,
        RamaadminapiAdminModule,
        RamaadminapiAccountModule,
        RamaadminapiEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class RamaadminapiAppModule {}
