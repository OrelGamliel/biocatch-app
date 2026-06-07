[screen-capture.webm](https://github.com/user-attachments/assets/68c17d63-9a22-4ef0-ac66-639f0e26e634)
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
