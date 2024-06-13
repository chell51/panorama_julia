var APP_DATA = {
  "scenes": [
    {
      "id": "0-living-area",
      "name": "Living area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": -0.41763014853743385,
        "pitch": 0.12520189758395261,
        "fov": 1.5554834639797441
      },
      "linkHotspots": [
        {
          "yaw": -1.098229672051291,
          "pitch": 0.19421021623388057,
          "rotation": 0,
          "target": "2-terrace"
        },
        {
          "yaw": 1.715846032045139,
          "pitch": 0.04393195522395743,
          "rotation": 0,
          "target": "1-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-bedroom",
      "name": "Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.46907728130320336,
        "pitch": 0.2823218428855725,
        "fov": 1.5554834639797441
      },
      "linkHotspots": [
        {
          "yaw": -1.6128730476739541,
          "pitch": 0.1857832701631814,
          "rotation": 0,
          "target": "0-living-area"
        },
        {
          "yaw": 2.730802703376199,
          "pitch": 0.20798875118312665,
          "rotation": 0,
          "target": "2-terrace"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-terrace",
      "name": "Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1116618068142792,
          "pitch": 0.1649205629919379,
          "rotation": 0,
          "target": "0-living-area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
