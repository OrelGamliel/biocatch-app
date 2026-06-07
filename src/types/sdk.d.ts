interface CdApi {
  setCustomerSessionId(csid: string): void
  changeContext(context: string): void
}

declare global {
  interface Window {
    cdApi?: CdApi
  }
}

export {}
