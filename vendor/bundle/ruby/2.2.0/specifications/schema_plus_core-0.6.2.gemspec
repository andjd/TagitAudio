# -*- encoding: utf-8 -*-
# stub: schema_plus_core 0.6.2 ruby lib

Gem::Specification.new do |s|
  s.name = "schema_plus_core"
  s.version = "0.6.2"

  s.required_rubygems_version = Gem::Requirement.new(">= 0") if s.respond_to? :required_rubygems_version=
  s.require_paths = ["lib"]
  s.authors = ["ronen barzel"]
  s.date = "2016-01-16"
  s.description = "Provides an internal extension API to ActiveRecord, in the form of middleware-style callback stacks"
  s.email = ["ronen@barzel.org"]
  s.homepage = "https://github.com/SchemaPlus/schema_plus_core"
  s.licenses = ["MIT"]
  s.rubygems_version = "2.4.6"
  s.summary = "Provides an internal extension API to ActiveRecord"

  s.installed_by_version = "2.4.6" if s.respond_to? :installed_by_version

  if s.respond_to? :specification_version then
    s.specification_version = 4

    if Gem::Version.new(Gem::VERSION) >= Gem::Version.new('1.2.0') then
      s.add_runtime_dependency(%q<activerecord>, ["~> 4.2"])
      s.add_runtime_dependency(%q<schema_monkey>, ["~> 2.1"])
      s.add_development_dependency(%q<bundler>, ["~> 1.7"])
      s.add_development_dependency(%q<rake>, ["~> 10.0"])
      s.add_development_dependency(%q<rspec>, ["~> 3.0.0"])
      s.add_development_dependency(%q<rspec-given>, [">= 0"])
      s.add_development_dependency(%q<schema_dev>, ["~> 3.3"])
      s.add_development_dependency(%q<simplecov>, [">= 0"])
      s.add_development_dependency(%q<simplecov-gem-profile>, [">= 0"])
    else
      s.add_dependency(%q<activerecord>, ["~> 4.2"])
      s.add_dependency(%q<schema_monkey>, ["~> 2.1"])
      s.add_dependency(%q<bundler>, ["~> 1.7"])
      s.add_dependency(%q<rake>, ["~> 10.0"])
      s.add_dependency(%q<rspec>, ["~> 3.0.0"])
      s.add_dependency(%q<rspec-given>, [">= 0"])
      s.add_dependency(%q<schema_dev>, ["~> 3.3"])
      s.add_dependency(%q<simplecov>, [">= 0"])
      s.add_dependency(%q<simplecov-gem-profile>, [">= 0"])
    end
  else
    s.add_dependency(%q<activerecord>, ["~> 4.2"])
    s.add_dependency(%q<schema_monkey>, ["~> 2.1"])
    s.add_dependency(%q<bundler>, ["~> 1.7"])
    s.add_dependency(%q<rake>, ["~> 10.0"])
    s.add_dependency(%q<rspec>, ["~> 3.0.0"])
    s.add_dependency(%q<rspec-given>, [">= 0"])
    s.add_dependency(%q<schema_dev>, ["~> 3.3"])
    s.add_dependency(%q<simplecov>, [">= 0"])
    s.add_dependency(%q<simplecov-gem-profile>, [">= 0"])
  end
end
