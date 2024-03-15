find src/generated -name '*.ts' -delete
find src/developer-controlled-wallets/generated -name '*.ts' -delete
find src/user-controlled-wallets/generated -name '*.ts' -delete
find src/smart-contract-platform/generated -name '*.ts' -delete

make -C ./w3s-openapi-internal/ bundle

npx openapi-generator-cli generate -g typescript-axios  \
-i ./w3s-openapi-internal/dist/developer-controlled-wallets.yaml \
-o ./src/developer-controlled-wallets/generated/ \
-p npmName=circle,supportsES6=true,modelPropertyNaming=original,apiPackage=apis,modelPackage=models \
-t ./templates/typescript-axios --additional-properties=withSeparateModelsAndApi=true


npx ts-node build-utils/mustache-camelize.ts src/developer-controlled-wallets/generated/index.ts > src/developer-controlled-wallets/generated/index-temp.ts

mv src/developer-controlled-wallets/generated/index-temp.ts src/developer-controlled-wallets/generated/index.ts

yarn lint-fix
yarn format

#Bundle openapi specs
#make -C ./w3s-openapi-internal/ bundle
#
#npx openapi-generator-cli generate -g typescript-axios  \
#-i ./w3s-openapi-internal/dist/developer-controlled-wallets.yaml \
#-o ./src/developer-controlled-wallets/generated/ \
#-p npmName=circle,supportsES6=true,modelPropertyNaming=original,apiPackage=apis,modelPackage=models \
#-t ./templates/typescript-axios --additional-properties=withSeparateModelsAndApi=true
#
#npx ts-node build-utils/mustache-camelize.ts src/developer-controlled-wallets/generated/index.ts > src/developer-controlled-wallets/generated/index-temp.ts
#
#mv src/developer-controlled-wallets/generated/index-temp.ts src/developer-controlled-wallets/generated/index.ts
#
#yarn lint-fix
#yarn format
