BioCatch Integration Demo

A simulated banking journey (Home -> Login -> Account -> Payment -> Logout) built to demonstrate BioCatch SDK integration. 
The SDK loads as script tag with defer (waiting for the whole html to load), collects behavioral data in the background, and is tied to a session with a CSID. 
On Login an init API call registers the session. 
On Payment, a getScore call gets a score (no real scoring data), 
both using the same CSID 

## Run

```bash
npm install
npm run dev
```
