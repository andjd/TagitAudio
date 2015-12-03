# -*- encoding: utf-8 -*-
# stub: flux-rails-assets 2.1.0 ruby lib

Gem::Specification.new do |s|
  s.name = "flux-rails-assets"
  s.version = "2.1.0"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["Stefan Ritter"]
  s.date = "2015-10-15"
  s.description = "Use Facebook's Flux dispatcher and Node EventEmitter in your Rails project."
  s.email = ["stefan@stefanritter.com"]
  s.homepage = "https://github.com/stefanritter/flux-rails-assets"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.4.6"
  s.summary = "Flux dispatcher and Node Event Emitter for the Ruby on Rails asset pipeline"

  s.installed_by_version = "2.4.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<railties>, [">= 3.1"])
      s.add_development_dependency(%q<rails>, ["~> 3.2.12"])
    else
      s.add_dependency(%q<railties>, [">= 3.1"])
      s.add_dependency(%q<rails>, ["~> 3.2.12"])
    end
  else
    s.add_dependency(%q<railties>, [">= 3.1"])
    s.add_dependency(%q<rails>, ["~> 3.2.12"])
  end
end
