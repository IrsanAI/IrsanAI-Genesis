// IrsanAI Buddy — On Demand Component für alle Pages im Stack
// Nutzung auf jeder GitHub Page: <script src="https://irsanai.github.io/IrsanAI-Genesis/assets/buddy/buddy.js"></script>
// Bietet: buddy helper, buddy automate, buddy suggest, buddy on-demand
(function(){
  window.IrsanAI_Buddy = {
    version: "0.6",
    mode: "on-demand",
    suggest: function(repo){ return "TaskClassifier -> "+repo+" -> EG 4e74a97 MATCH 0.88"; },
    automate: function(){ console.log("[Buddy Automate] Ready"); },
    helper: function(msg){ console.log("[Buddy Helper] "+msg); }
  };
  console.log("[Buddy] v0.6 loaded — on-demand, automate, helper, suggest ready — Genesis!= Buddy");
})();
