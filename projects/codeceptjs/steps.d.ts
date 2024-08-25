/// <reference types='codeceptjs' />
type steps_file = typeof import('./support/steps_file.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends Playwright, REST, JSONResponse {}
  interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
  namespace Translation {
    interface Actions {}
  }
}
