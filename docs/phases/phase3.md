# Phase 3: Annotation

## Rails
### Models
* annotation
* tag

### Controllers
* annotation (create update destroy)
* taggin (create destroy)
* tag (create)

### Views
* episode/:episodeId/annotations/index.json.jbuilder
* annotation/annotationId/tagging/index.json.jbuilder


## Flux
### Views (React Components)
* comment form

### Stores

### Actions
* get annotation tags
* get episode annotations

### ApiUtil
* ApiUtil.fetch episode annotations and tags
* ApiUtil.createAnnotation
* ApiUtil.editAnnotation
* ApiUtil.destroyAnnotation

## Gems/Libraries
