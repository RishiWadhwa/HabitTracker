# Copyright (c) Meta Platforms, Inc. and affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

version = "0.80.2"
source = { :git => 'https://github.com/facebook/react-native.git' }
if version == '1000.0.0'
  # This is an unpublished version, use the latest commit hash of the react-native repo, which we’re presumably in.
  source[:commit] = `git rev-parse HEAD`.strip if system("git rev-parse --git-dir > /dev/null 2>&1")
else
  source[:tag] = "v#{version}"
end

Pod::Spec.new do |s|
  s.name                   = "ReactAppDependencyProvider"
  s.version                = version
  s.summary                = "The third party dependency provider for the app"
  s.homepage               = "https://reactnative.dev/"
  s.documentation_url      = "https://reactnative.dev/"
  s.license                = "MIT"
  s.author                 = "Meta Platforms, Inc. and its affiliates"
  s.platforms              = min_supported_versions
  s.source                 = source
  s.source_files           = "**/RCTAppDependencyProvider.{h,mm}"

  # This guard prevent to install the dependencies when we run `pod install` in the old architecture.
  s.pod_target_xcconfig    = {
    "CLANG_CXX_LANGUAGE_STANDARD" => rct_cxx_language_standard(),
    "DEFINES_MODULE" => "YES"
  }

  s.dependency "ReactCodegen"
end
