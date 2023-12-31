import { DragDropModule } from '@angular/cdk/drag-drop';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FullCalendarModule } from '@fullcalendar/angular';
import { KeysPipe } from 'src/utils/keys-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth.interceptor';
import { CadastarCriancaComponent } from './cadastar-crianca/cadastar-crianca.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ErrorPopupComponent } from './error-popup/error-popup.component';
import { GamesComponent } from './games/games.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CalendarioComponent } from './material/calendario/calendario.component';
import { FooterComponent } from './material/footer/footer.component';
import { ImageSelectorComponent } from './material/image-selector/image-selector.component';
import { BoardComponent } from './material/memory-game/board/board.component';
import { CardComponent } from './material/memory-game/card/card.component';
import { MusicSimulatorComponent } from './material/music-simulator/music-simulator.component';
import { NavBarComponent } from './material/nav-bar/nav-bar.component';
import { PaintComponent } from './material/paint/paint.component';
import { StyleComponentComponent } from './material/style-component/style-component.component';
import { TelaInterativaComponent } from './material/tela-interativa/tela-interativa.component';
import { TickerComponent } from './material/ticker/ticker.component';
import { MeuPerfilComponent } from './meu-perfil/meu-perfil.component';
import { TabelaComponent } from './tabela/tabela.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    TabelaComponent,
    HomeComponent,
    CadastarCriancaComponent,
    NavBarComponent,
    LoginComponent,
    ErrorPopupComponent,
    StyleComponentComponent,
    ImageSelectorComponent,
    MeuPerfilComponent,
    KeysPipe,
    FooterComponent,
    TickerComponent,
    CalendarioComponent,
    TelaInterativaComponent,
    GamesComponent,
    CardComponent,
    BoardComponent,
    PaintComponent,
    MusicSimulatorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DragDropModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatTabsModule,
    MatIconModule,
    FontAwesomeModule,
    FullCalendarModule,
    RouterModule.forRoot([]),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
