# `healthCheck` Submodule <a name="`healthCheck` Submodule" id="@cdktf/provider-spotinst.healthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthCheck <a name="HealthCheck" id="@cdktf/provider-spotinst.healthCheck.HealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check spotinst_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer"></a>

```typescript
import { healthCheck } from '@cdktf/provider-spotinst'

new healthCheck.HealthCheck(scope: Construct, id: string, config: HealthCheckConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig">HealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig">HealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck">putCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.resetCheck">resetCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.resetProxyPort">resetProxyPort</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCheck` <a name="putCheck" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck"></a>

```typescript
public putCheck(value: HealthCheckCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.putCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a>

---

##### `resetCheck` <a name="resetCheck" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.resetCheck"></a>

```typescript
public resetCheck(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProxyPort` <a name="resetProxyPort" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.resetProxyPort"></a>

```typescript
public resetProxyPort(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a HealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.isConstruct"></a>

```typescript
import { healthCheck } from '@cdktf/provider-spotinst'

healthCheck.HealthCheck.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.isTerraformElement"></a>

```typescript
import { healthCheck } from '@cdktf/provider-spotinst'

healthCheck.HealthCheck.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.isTerraformResource"></a>

```typescript
import { healthCheck } from '@cdktf/provider-spotinst'

healthCheck.HealthCheck.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.generateConfigForImport"></a>

```typescript
import { healthCheck } from '@cdktf/provider-spotinst'

healthCheck.HealthCheck.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a HealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the HealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.check">check</a></code> | <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference">HealthCheckCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.checkInput">checkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyAddressInput">proxyAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyPortInput">proxyPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.resourceIdInput">resourceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyAddress">proxyAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyPort">proxyPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.check"></a>

```typescript
public readonly check: HealthCheckCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference">HealthCheckCheckOutputReference</a>

---

##### `checkInput`<sup>Optional</sup> <a name="checkInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.checkInput"></a>

```typescript
public readonly checkInput: HealthCheckCheck;
```

- *Type:* <a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `proxyAddressInput`<sup>Optional</sup> <a name="proxyAddressInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyAddressInput"></a>

```typescript
public readonly proxyAddressInput: string;
```

- *Type:* string

---

##### `proxyPortInput`<sup>Optional</sup> <a name="proxyPortInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyPortInput"></a>

```typescript
public readonly proxyPortInput: number;
```

- *Type:* number

---

##### `resourceIdInput`<sup>Optional</sup> <a name="resourceIdInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.resourceIdInput"></a>

```typescript
public readonly resourceIdInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `proxyAddress`<sup>Required</sup> <a name="proxyAddress" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyAddress"></a>

```typescript
public readonly proxyAddress: string;
```

- *Type:* string

---

##### `proxyPort`<sup>Required</sup> <a name="proxyPort" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.proxyPort"></a>

```typescript
public readonly proxyPort: number;
```

- *Type:* number

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.healthCheck.HealthCheck.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthCheckCheck <a name="HealthCheckCheck" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.Initializer"></a>

```typescript
import { healthCheck } from '@cdktf/provider-spotinst'

const healthCheckCheck: healthCheck.HealthCheckCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.healthy">healthy</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#healthy HealthCheck#healthy}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.interval">interval</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#interval HealthCheck#interval}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.port">port</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#port HealthCheck#port}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.protocol">protocol</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#protocol HealthCheck#protocol}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.unhealthy">unhealthy</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#unhealthy HealthCheck#unhealthy}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.endpoint">endpoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#endpoint HealthCheck#endpoint}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.endPoint">endPoint</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#end_point HealthCheck#end_point}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.timeout">timeout</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#timeout HealthCheck#timeout}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.timeOut">timeOut</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#time_out HealthCheck#time_out}. |

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.healthy"></a>

```typescript
public readonly healthy: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#healthy HealthCheck#healthy}.

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#interval HealthCheck#interval}.

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#port HealthCheck#port}.

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#protocol HealthCheck#protocol}.

---

##### `unhealthy`<sup>Required</sup> <a name="unhealthy" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.unhealthy"></a>

```typescript
public readonly unhealthy: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#unhealthy HealthCheck#unhealthy}.

---

##### `endpoint`<sup>Optional</sup> <a name="endpoint" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#endpoint HealthCheck#endpoint}.

---

##### `endPoint`<sup>Optional</sup> <a name="endPoint" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.endPoint"></a>

```typescript
public readonly endPoint: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#end_point HealthCheck#end_point}.

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#timeout HealthCheck#timeout}.

---

##### `timeOut`<sup>Optional</sup> <a name="timeOut" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheck.property.timeOut"></a>

```typescript
public readonly timeOut: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#time_out HealthCheck#time_out}.

---

### HealthCheckConfig <a name="HealthCheckConfig" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.Initializer"></a>

```typescript
import { healthCheck } from '@cdktf/provider-spotinst'

const healthCheckConfig: healthCheck.HealthCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.proxyAddress">proxyAddress</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#proxy_address HealthCheck#proxy_address}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.resourceId">resourceId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#resource_id HealthCheck#resource_id}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.check">check</a></code> | <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a></code> | check block. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#id HealthCheck#id}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#name HealthCheck#name}. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.proxyPort">proxyPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#proxy_port HealthCheck#proxy_port}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `proxyAddress`<sup>Required</sup> <a name="proxyAddress" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.proxyAddress"></a>

```typescript
public readonly proxyAddress: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#proxy_address HealthCheck#proxy_address}.

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#resource_id HealthCheck#resource_id}.

---

##### `check`<sup>Optional</sup> <a name="check" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.check"></a>

```typescript
public readonly check: HealthCheckCheck;
```

- *Type:* <a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a>

check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#check HealthCheck#check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#id HealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#name HealthCheck#name}.

---

##### `proxyPort`<sup>Optional</sup> <a name="proxyPort" id="@cdktf/provider-spotinst.healthCheck.HealthCheckConfig.property.proxyPort"></a>

```typescript
public readonly proxyPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.224.1/docs/resources/health_check#proxy_port HealthCheck#proxy_port}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthCheckCheckOutputReference <a name="HealthCheckCheckOutputReference" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.Initializer"></a>

```typescript
import { healthCheck } from '@cdktf/provider-spotinst'

new healthCheck.HealthCheckCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetEndpoint">resetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetEndPoint">resetEndPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetTimeOut">resetTimeOut</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEndpoint` <a name="resetEndpoint" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetEndpoint"></a>

```typescript
public resetEndpoint(): void
```

##### `resetEndPoint` <a name="resetEndPoint" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetEndPoint"></a>

```typescript
public resetEndPoint(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetTimeOut` <a name="resetTimeOut" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.resetTimeOut"></a>

```typescript
public resetTimeOut(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endpointInput">endpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endPointInput">endPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.healthyInput">healthyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.intervalInput">intervalInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeOutInput">timeOutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.unhealthyInput">unhealthyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endPoint">endPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.healthy">healthy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.interval">interval</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeOut">timeOut</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.unhealthy">unhealthy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointInput`<sup>Optional</sup> <a name="endpointInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endpointInput"></a>

```typescript
public readonly endpointInput: string;
```

- *Type:* string

---

##### `endPointInput`<sup>Optional</sup> <a name="endPointInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endPointInput"></a>

```typescript
public readonly endPointInput: string;
```

- *Type:* string

---

##### `healthyInput`<sup>Optional</sup> <a name="healthyInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.healthyInput"></a>

```typescript
public readonly healthyInput: number;
```

- *Type:* number

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: number;
```

- *Type:* number

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `timeOutInput`<sup>Optional</sup> <a name="timeOutInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeOutInput"></a>

```typescript
public readonly timeOutInput: number;
```

- *Type:* number

---

##### `unhealthyInput`<sup>Optional</sup> <a name="unhealthyInput" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.unhealthyInput"></a>

```typescript
public readonly unhealthyInput: number;
```

- *Type:* number

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `endPoint`<sup>Required</sup> <a name="endPoint" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.endPoint"></a>

```typescript
public readonly endPoint: string;
```

- *Type:* string

---

##### `healthy`<sup>Required</sup> <a name="healthy" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.healthy"></a>

```typescript
public readonly healthy: number;
```

- *Type:* number

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.interval"></a>

```typescript
public readonly interval: number;
```

- *Type:* number

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `timeOut`<sup>Required</sup> <a name="timeOut" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.timeOut"></a>

```typescript
public readonly timeOut: number;
```

- *Type:* number

---

##### `unhealthy`<sup>Required</sup> <a name="unhealthy" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.unhealthy"></a>

```typescript
public readonly unhealthy: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.healthCheck.HealthCheckCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: HealthCheckCheck;
```

- *Type:* <a href="#@cdktf/provider-spotinst.healthCheck.HealthCheckCheck">HealthCheckCheck</a>

---



