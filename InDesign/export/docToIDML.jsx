﻿var theFolder= "~/Desktop/idml";var doc = app.activeDocument;var aName = doc.name;var newName = aName.replace("indd","idml");var theFile = File(theFolder +"/"+ newName );doc.exportFile(ExportFormat.INDESIGN_MARKUP, theFile, false);