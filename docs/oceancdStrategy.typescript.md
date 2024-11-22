# `oceancdStrategy` Submodule <a name="`oceancdStrategy` Submodule" id="@cdktf/provider-spotinst.oceancdStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdStrategy <a name="OceancdStrategy" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy spotinst_oceancd_strategy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategy(scope: Construct, id: string, config: OceancdStrategyConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig">OceancdStrategyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig">OceancdStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putCanary">putCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putRolling">putRolling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetCanary">resetCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetRolling">resetRolling</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCanary` <a name="putCanary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putCanary"></a>

```typescript
public putCanary(value: OceancdStrategyCanary): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putCanary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

---

##### `putRolling` <a name="putRolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putRolling"></a>

```typescript
public putRolling(value: OceancdStrategyRolling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.putRolling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

---

##### `resetCanary` <a name="resetCanary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetCanary"></a>

```typescript
public resetCanary(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRolling` <a name="resetRolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.resetRolling"></a>

```typescript
public resetRolling(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceancdStrategy resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isConstruct"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

oceancdStrategy.OceancdStrategy.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformElement"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

oceancdStrategy.OceancdStrategy.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformResource"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

oceancdStrategy.OceancdStrategy.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

oceancdStrategy.OceancdStrategy.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OceancdStrategy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceancdStrategy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceancdStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceancdStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canary">canary</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference">OceancdStrategyCanaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rolling">rolling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference">OceancdStrategyRollingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canaryInput">canaryInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rollingInput">rollingInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyNameInput">strategyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyName">strategyName</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `canary`<sup>Required</sup> <a name="canary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canary"></a>

```typescript
public readonly canary: OceancdStrategyCanaryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference">OceancdStrategyCanaryOutputReference</a>

---

##### `rolling`<sup>Required</sup> <a name="rolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rolling"></a>

```typescript
public readonly rolling: OceancdStrategyRollingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference">OceancdStrategyRollingOutputReference</a>

---

##### `canaryInput`<sup>Optional</sup> <a name="canaryInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.canaryInput"></a>

```typescript
public readonly canaryInput: OceancdStrategyCanary;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `rollingInput`<sup>Optional</sup> <a name="rollingInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.rollingInput"></a>

```typescript
public readonly rollingInput: OceancdStrategyRolling;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

---

##### `strategyNameInput`<sup>Optional</sup> <a name="strategyNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyNameInput"></a>

```typescript
public readonly strategyNameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `strategyName`<sup>Required</sup> <a name="strategyName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.strategyName"></a>

```typescript
public readonly strategyName: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategy.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdStrategyCanary <a name="OceancdStrategyCanary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyCanary: oceancdStrategy.OceancdStrategyCanary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.steps">steps</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>[]</code> | steps block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.backgroundVerification">backgroundVerification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a></code> | background_verification block. |

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.steps"></a>

```typescript
public readonly steps: IResolvable | OceancdStrategyCanarySteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>[]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#steps OceancdStrategy#steps}

---

##### `backgroundVerification`<sup>Optional</sup> <a name="backgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary.property.backgroundVerification"></a>

```typescript
public readonly backgroundVerification: OceancdStrategyCanaryBackgroundVerification;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

background_verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#background_verification OceancdStrategy#background_verification}

---

### OceancdStrategyCanaryBackgroundVerification <a name="OceancdStrategyCanaryBackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyCanaryBackgroundVerification: oceancdStrategy.OceancdStrategyCanaryBackgroundVerification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification.property.templateNames">templateNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}. |

---

##### `templateNames`<sup>Required</sup> <a name="templateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification.property.templateNames"></a>

```typescript
public readonly templateNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

### OceancdStrategyCanarySteps <a name="OceancdStrategyCanarySteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyCanarySteps: oceancdStrategy.OceancdStrategyCanarySteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.pause">pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a></code> | pause block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setCanaryScale">setCanaryScale</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a></code> | set_canary_scale block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setHeaderRoute">setHeaderRoute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a></code> | set_header_route block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setWeight">setWeight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#set_weight OceancdStrategy#set_weight}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.stepName">stepName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#step_name OceancdStrategy#step_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.verification">verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a></code> | verification block. |

---

##### `pause`<sup>Optional</sup> <a name="pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.pause"></a>

```typescript
public readonly pause: OceancdStrategyCanaryStepsPause;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

pause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#pause OceancdStrategy#pause}

---

##### `setCanaryScale`<sup>Optional</sup> <a name="setCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setCanaryScale"></a>

```typescript
public readonly setCanaryScale: OceancdStrategyCanaryStepsSetCanaryScale;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

set_canary_scale block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#set_canary_scale OceancdStrategy#set_canary_scale}

---

##### `setHeaderRoute`<sup>Optional</sup> <a name="setHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setHeaderRoute"></a>

```typescript
public readonly setHeaderRoute: OceancdStrategyCanaryStepsSetHeaderRoute;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

set_header_route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#set_header_route OceancdStrategy#set_header_route}

---

##### `setWeight`<sup>Optional</sup> <a name="setWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.setWeight"></a>

```typescript
public readonly setWeight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#set_weight OceancdStrategy#set_weight}.

---

##### `stepName`<sup>Optional</sup> <a name="stepName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#step_name OceancdStrategy#step_name}.

---

##### `verification`<sup>Optional</sup> <a name="verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps.property.verification"></a>

```typescript
public readonly verification: OceancdStrategyCanaryStepsVerification;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#verification OceancdStrategy#verification}

---

### OceancdStrategyCanaryStepsPause <a name="OceancdStrategyCanaryStepsPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyCanaryStepsPause: oceancdStrategy.OceancdStrategyCanaryStepsPause = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}.

---

### OceancdStrategyCanaryStepsSetCanaryScale <a name="OceancdStrategyCanaryStepsSetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyCanaryStepsSetCanaryScale: oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.matchTrafficWeight">matchTrafficWeight</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#match_traffic_weight OceancdStrategy#match_traffic_weight}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.replicas">replicas</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#replicas OceancdStrategy#replicas}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.weight">weight</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#weight OceancdStrategy#weight}. |

---

##### `matchTrafficWeight`<sup>Optional</sup> <a name="matchTrafficWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.matchTrafficWeight"></a>

```typescript
public readonly matchTrafficWeight: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#match_traffic_weight OceancdStrategy#match_traffic_weight}.

---

##### `replicas`<sup>Optional</sup> <a name="replicas" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#replicas OceancdStrategy#replicas}.

---

##### `weight`<sup>Optional</sup> <a name="weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#weight OceancdStrategy#weight}.

---

### OceancdStrategyCanaryStepsSetHeaderRoute <a name="OceancdStrategyCanaryStepsSetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyCanaryStepsSetHeaderRoute: oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.headerRouteName">headerRouteName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#header_route_name OceancdStrategy#header_route_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.match">match</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>[]</code> | match block. |

---

##### `headerRouteName`<sup>Required</sup> <a name="headerRouteName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.headerRouteName"></a>

```typescript
public readonly headerRouteName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#header_route_name OceancdStrategy#header_route_name}.

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute.property.match"></a>

```typescript
public readonly match: IResolvable | OceancdStrategyCanaryStepsSetHeaderRouteMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>[]

match block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#match OceancdStrategy#match}

---

### OceancdStrategyCanaryStepsSetHeaderRouteMatch <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatch" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyCanaryStepsSetHeaderRouteMatch: oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerName">headerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#header_name OceancdStrategy#header_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerValue">headerValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a></code> | header_value block. |

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#header_name OceancdStrategy#header_name}.

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch.property.headerValue"></a>

```typescript
public readonly headerValue: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

header_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#header_value OceancdStrategy#header_value}

---

### OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue: oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.exact">exact</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#exact OceancdStrategy#exact}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.prefix">prefix</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#prefix OceancdStrategy#prefix}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.regex">regex</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#regex OceancdStrategy#regex}. |

---

##### `exact`<sup>Optional</sup> <a name="exact" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#exact OceancdStrategy#exact}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#prefix OceancdStrategy#prefix}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#regex OceancdStrategy#regex}.

---

### OceancdStrategyCanaryStepsVerification <a name="OceancdStrategyCanaryStepsVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyCanaryStepsVerification: oceancdStrategy.OceancdStrategyCanaryStepsVerification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification.property.templateNames">templateNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}. |

---

##### `templateNames`<sup>Required</sup> <a name="templateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification.property.templateNames"></a>

```typescript
public readonly templateNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

### OceancdStrategyConfig <a name="OceancdStrategyConfig" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyConfig: oceancdStrategy.OceancdStrategyConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.strategyName">strategyName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#strategy_name OceancdStrategy#strategy_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.canary">canary</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a></code> | canary block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#id OceancdStrategy#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.rolling">rolling</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a></code> | rolling block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `strategyName`<sup>Required</sup> <a name="strategyName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.strategyName"></a>

```typescript
public readonly strategyName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#strategy_name OceancdStrategy#strategy_name}.

---

##### `canary`<sup>Optional</sup> <a name="canary" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.canary"></a>

```typescript
public readonly canary: OceancdStrategyCanary;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

canary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#canary OceancdStrategy#canary}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#id OceancdStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rolling`<sup>Optional</sup> <a name="rolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyConfig.property.rolling"></a>

```typescript
public readonly rolling: OceancdStrategyRolling;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

rolling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#rolling OceancdStrategy#rolling}

---

### OceancdStrategyRolling <a name="OceancdStrategyRolling" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyRolling: oceancdStrategy.OceancdStrategyRolling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling.property.steps">steps</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>[]</code> | steps block. |

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling.property.steps"></a>

```typescript
public readonly steps: IResolvable | OceancdStrategyRollingSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>[]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#steps OceancdStrategy#steps}

---

### OceancdStrategyRollingSteps <a name="OceancdStrategyRollingSteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyRollingSteps: oceancdStrategy.OceancdStrategyRollingSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.pause">pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a></code> | pause block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.stepsName">stepsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#steps_name OceancdStrategy#steps_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.verification">verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a></code> | verification block. |

---

##### `pause`<sup>Optional</sup> <a name="pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.pause"></a>

```typescript
public readonly pause: OceancdStrategyRollingStepsPause;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

pause block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#pause OceancdStrategy#pause}

---

##### `stepsName`<sup>Optional</sup> <a name="stepsName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.stepsName"></a>

```typescript
public readonly stepsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#steps_name OceancdStrategy#steps_name}.

---

##### `verification`<sup>Optional</sup> <a name="verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps.property.verification"></a>

```typescript
public readonly verification: OceancdStrategyRollingStepsVerification;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

verification block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#verification OceancdStrategy#verification}

---

### OceancdStrategyRollingStepsPause <a name="OceancdStrategyRollingStepsPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyRollingStepsPause: oceancdStrategy.OceancdStrategyRollingStepsPause = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#duration OceancdStrategy#duration}.

---

### OceancdStrategyRollingStepsVerification <a name="OceancdStrategyRollingStepsVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

const oceancdStrategyRollingStepsVerification: oceancdStrategy.OceancdStrategyRollingStepsVerification = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification.property.templateNames">templateNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}. |

---

##### `templateNames`<sup>Required</sup> <a name="templateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification.property.templateNames"></a>

```typescript
public readonly templateNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.199.0/docs/resources/oceancd_strategy#template_names OceancdStrategy#template_names}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdStrategyCanaryBackgroundVerificationOutputReference <a name="OceancdStrategyCanaryBackgroundVerificationOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNamesInput">templateNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNames">templateNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateNamesInput`<sup>Optional</sup> <a name="templateNamesInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNamesInput"></a>

```typescript
public readonly templateNamesInput: string[];
```

- *Type:* string[]

---

##### `templateNames`<sup>Required</sup> <a name="templateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.templateNames"></a>

```typescript
public readonly templateNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdStrategyCanaryBackgroundVerification;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

---


### OceancdStrategyCanaryOutputReference <a name="OceancdStrategyCanaryOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyCanaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putBackgroundVerification">putBackgroundVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resetBackgroundVerification">resetBackgroundVerification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBackgroundVerification` <a name="putBackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putBackgroundVerification"></a>

```typescript
public putBackgroundVerification(value: OceancdStrategyCanaryBackgroundVerification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putBackgroundVerification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

---

##### `putSteps` <a name="putSteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putSteps"></a>

```typescript
public putSteps(value: IResolvable | OceancdStrategyCanarySteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.putSteps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>[]

---

##### `resetBackgroundVerification` <a name="resetBackgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.resetBackgroundVerification"></a>

```typescript
public resetBackgroundVerification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerification">backgroundVerification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference">OceancdStrategyCanaryBackgroundVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList">OceancdStrategyCanaryStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerificationInput">backgroundVerificationInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.stepsInput">stepsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `backgroundVerification`<sup>Required</sup> <a name="backgroundVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerification"></a>

```typescript
public readonly backgroundVerification: OceancdStrategyCanaryBackgroundVerificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerificationOutputReference">OceancdStrategyCanaryBackgroundVerificationOutputReference</a>

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.steps"></a>

```typescript
public readonly steps: OceancdStrategyCanaryStepsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList">OceancdStrategyCanaryStepsList</a>

---

##### `backgroundVerificationInput`<sup>Optional</sup> <a name="backgroundVerificationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.backgroundVerificationInput"></a>

```typescript
public readonly backgroundVerificationInput: OceancdStrategyCanaryBackgroundVerification;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryBackgroundVerification">OceancdStrategyCanaryBackgroundVerification</a>

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | OceancdStrategyCanarySteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdStrategyCanary;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanary">OceancdStrategyCanary</a>

---


### OceancdStrategyCanaryStepsList <a name="OceancdStrategyCanaryStepsList" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyCanaryStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.get"></a>

```typescript
public get(index: number): OceancdStrategyCanaryStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdStrategyCanarySteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>[]

---


### OceancdStrategyCanaryStepsOutputReference <a name="OceancdStrategyCanaryStepsOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyCanaryStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putPause">putPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale">putSetCanaryScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetHeaderRoute">putSetHeaderRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putVerification">putVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetPause">resetPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetCanaryScale">resetSetCanaryScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetHeaderRoute">resetSetHeaderRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetWeight">resetSetWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetStepName">resetStepName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetVerification">resetVerification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPause` <a name="putPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putPause"></a>

```typescript
public putPause(value: OceancdStrategyCanaryStepsPause): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putPause.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

---

##### `putSetCanaryScale` <a name="putSetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale"></a>

```typescript
public putSetCanaryScale(value: OceancdStrategyCanaryStepsSetCanaryScale): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetCanaryScale.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

---

##### `putSetHeaderRoute` <a name="putSetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetHeaderRoute"></a>

```typescript
public putSetHeaderRoute(value: OceancdStrategyCanaryStepsSetHeaderRoute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putSetHeaderRoute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

---

##### `putVerification` <a name="putVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putVerification"></a>

```typescript
public putVerification(value: OceancdStrategyCanaryStepsVerification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.putVerification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

---

##### `resetPause` <a name="resetPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetPause"></a>

```typescript
public resetPause(): void
```

##### `resetSetCanaryScale` <a name="resetSetCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetCanaryScale"></a>

```typescript
public resetSetCanaryScale(): void
```

##### `resetSetHeaderRoute` <a name="resetSetHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetHeaderRoute"></a>

```typescript
public resetSetHeaderRoute(): void
```

##### `resetSetWeight` <a name="resetSetWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetSetWeight"></a>

```typescript
public resetSetWeight(): void
```

##### `resetStepName` <a name="resetStepName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetStepName"></a>

```typescript
public resetStepName(): void
```

##### `resetVerification` <a name="resetVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.resetVerification"></a>

```typescript
public resetVerification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pause">pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference">OceancdStrategyCanaryStepsPauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScale">setCanaryScale</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference">OceancdStrategyCanaryStepsSetCanaryScaleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRoute">setHeaderRoute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verification">verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference">OceancdStrategyCanaryStepsVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pauseInput">pauseInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScaleInput">setCanaryScaleInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRouteInput">setHeaderRouteInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeightInput">setWeightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepNameInput">stepNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verificationInput">verificationInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeight">setWeight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepName">stepName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pause`<sup>Required</sup> <a name="pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pause"></a>

```typescript
public readonly pause: OceancdStrategyCanaryStepsPauseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference">OceancdStrategyCanaryStepsPauseOutputReference</a>

---

##### `setCanaryScale`<sup>Required</sup> <a name="setCanaryScale" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScale"></a>

```typescript
public readonly setCanaryScale: OceancdStrategyCanaryStepsSetCanaryScaleOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference">OceancdStrategyCanaryStepsSetCanaryScaleOutputReference</a>

---

##### `setHeaderRoute`<sup>Required</sup> <a name="setHeaderRoute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRoute"></a>

```typescript
public readonly setHeaderRoute: OceancdStrategyCanaryStepsSetHeaderRouteOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteOutputReference</a>

---

##### `verification`<sup>Required</sup> <a name="verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verification"></a>

```typescript
public readonly verification: OceancdStrategyCanaryStepsVerificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference">OceancdStrategyCanaryStepsVerificationOutputReference</a>

---

##### `pauseInput`<sup>Optional</sup> <a name="pauseInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.pauseInput"></a>

```typescript
public readonly pauseInput: OceancdStrategyCanaryStepsPause;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

---

##### `setCanaryScaleInput`<sup>Optional</sup> <a name="setCanaryScaleInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setCanaryScaleInput"></a>

```typescript
public readonly setCanaryScaleInput: OceancdStrategyCanaryStepsSetCanaryScale;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

---

##### `setHeaderRouteInput`<sup>Optional</sup> <a name="setHeaderRouteInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setHeaderRouteInput"></a>

```typescript
public readonly setHeaderRouteInput: OceancdStrategyCanaryStepsSetHeaderRoute;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

---

##### `setWeightInput`<sup>Optional</sup> <a name="setWeightInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeightInput"></a>

```typescript
public readonly setWeightInput: number;
```

- *Type:* number

---

##### `stepNameInput`<sup>Optional</sup> <a name="stepNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepNameInput"></a>

```typescript
public readonly stepNameInput: string;
```

- *Type:* string

---

##### `verificationInput`<sup>Optional</sup> <a name="verificationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.verificationInput"></a>

```typescript
public readonly verificationInput: OceancdStrategyCanaryStepsVerification;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

---

##### `setWeight`<sup>Required</sup> <a name="setWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.setWeight"></a>

```typescript
public readonly setWeight: number;
```

- *Type:* number

---

##### `stepName`<sup>Required</sup> <a name="stepName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.stepName"></a>

```typescript
public readonly stepName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdStrategyCanarySteps;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanarySteps">OceancdStrategyCanarySteps</a>

---


### OceancdStrategyCanaryStepsPauseOutputReference <a name="OceancdStrategyCanaryStepsPauseOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPauseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdStrategyCanaryStepsPause;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsPause">OceancdStrategyCanaryStepsPause</a>

---


### OceancdStrategyCanaryStepsSetCanaryScaleOutputReference <a name="OceancdStrategyCanaryStepsSetCanaryScaleOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetMatchTrafficWeight">resetMatchTrafficWeight</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetReplicas">resetReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetWeight">resetWeight</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMatchTrafficWeight` <a name="resetMatchTrafficWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetMatchTrafficWeight"></a>

```typescript
public resetMatchTrafficWeight(): void
```

##### `resetReplicas` <a name="resetReplicas" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetReplicas"></a>

```typescript
public resetReplicas(): void
```

##### `resetWeight` <a name="resetWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.resetWeight"></a>

```typescript
public resetWeight(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeightInput">matchTrafficWeightInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicasInput">replicasInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weightInput">weightInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeight">matchTrafficWeight</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicas">replicas</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weight">weight</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `matchTrafficWeightInput`<sup>Optional</sup> <a name="matchTrafficWeightInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeightInput"></a>

```typescript
public readonly matchTrafficWeightInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicasInput`<sup>Optional</sup> <a name="replicasInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicasInput"></a>

```typescript
public readonly replicasInput: number;
```

- *Type:* number

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weightInput"></a>

```typescript
public readonly weightInput: number;
```

- *Type:* number

---

##### `matchTrafficWeight`<sup>Required</sup> <a name="matchTrafficWeight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.matchTrafficWeight"></a>

```typescript
public readonly matchTrafficWeight: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replicas`<sup>Required</sup> <a name="replicas" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.replicas"></a>

```typescript
public readonly replicas: number;
```

- *Type:* number

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.weight"></a>

```typescript
public readonly weight: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScaleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdStrategyCanaryStepsSetCanaryScale;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetCanaryScale">OceancdStrategyCanaryStepsSetCanaryScale</a>

---


### OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetExact">resetExact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetExact` <a name="resetExact" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetExact"></a>

```typescript
public resetExact(): void
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetPrefix"></a>

```typescript
public resetPrefix(): void
```

##### `resetRegex` <a name="resetRegex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.resetRegex"></a>

```typescript
public resetRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exactInput">exactInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefixInput">prefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regexInput">regexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exact">exact</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefix">prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regex">regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `exactInput`<sup>Optional</sup> <a name="exactInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exactInput"></a>

```typescript
public readonly exactInput: string;
```

- *Type:* string

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefixInput"></a>

```typescript
public readonly prefixInput: string;
```

- *Type:* string

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regexInput"></a>

```typescript
public readonly regexInput: string;
```

- *Type:* string

---

##### `exact`<sup>Required</sup> <a name="exact" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.exact"></a>

```typescript
public readonly exact: string;
```

- *Type:* string

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.prefix"></a>

```typescript
public readonly prefix: string;
```

- *Type:* string

---

##### `regex`<sup>Required</sup> <a name="regex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.regex"></a>

```typescript
public readonly regex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

---


### OceancdStrategyCanaryStepsSetHeaderRouteMatchList <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchList" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.get"></a>

```typescript
public get(index: number): OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdStrategyCanaryStepsSetHeaderRouteMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>[]

---


### OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference <a name="OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue">putHeaderValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putHeaderValue` <a name="putHeaderValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue"></a>

```typescript
public putHeaderValue(value: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.putHeaderValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValue">headerValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerNameInput">headerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValueInput">headerValueInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerName">headerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `headerValue`<sup>Required</sup> <a name="headerValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValue"></a>

```typescript
public readonly headerValue: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValueOutputReference</a>

---

##### `headerNameInput`<sup>Optional</sup> <a name="headerNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerNameInput"></a>

```typescript
public readonly headerNameInput: string;
```

- *Type:* string

---

##### `headerValueInput`<sup>Optional</sup> <a name="headerValueInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerValueInput"></a>

```typescript
public readonly headerValueInput: OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue">OceancdStrategyCanaryStepsSetHeaderRouteMatchHeaderValue</a>

---

##### `headerName`<sup>Required</sup> <a name="headerName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.headerName"></a>

```typescript
public readonly headerName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdStrategyCanaryStepsSetHeaderRouteMatch;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>

---


### OceancdStrategyCanaryStepsSetHeaderRouteOutputReference <a name="OceancdStrategyCanaryStepsSetHeaderRouteOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.putMatch">putMatch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMatch` <a name="putMatch" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.putMatch"></a>

```typescript
public putMatch(value: IResolvable | OceancdStrategyCanaryStepsSetHeaderRouteMatch[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.putMatch.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.match">match</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList">OceancdStrategyCanaryStepsSetHeaderRouteMatchList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteNameInput">headerRouteNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.matchInput">matchInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteName">headerRouteName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.match"></a>

```typescript
public readonly match: OceancdStrategyCanaryStepsSetHeaderRouteMatchList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatchList">OceancdStrategyCanaryStepsSetHeaderRouteMatchList</a>

---

##### `headerRouteNameInput`<sup>Optional</sup> <a name="headerRouteNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteNameInput"></a>

```typescript
public readonly headerRouteNameInput: string;
```

- *Type:* string

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: IResolvable | OceancdStrategyCanaryStepsSetHeaderRouteMatch[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteMatch">OceancdStrategyCanaryStepsSetHeaderRouteMatch</a>[]

---

##### `headerRouteName`<sup>Required</sup> <a name="headerRouteName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.headerRouteName"></a>

```typescript
public readonly headerRouteName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdStrategyCanaryStepsSetHeaderRoute;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsSetHeaderRoute">OceancdStrategyCanaryStepsSetHeaderRoute</a>

---


### OceancdStrategyCanaryStepsVerificationOutputReference <a name="OceancdStrategyCanaryStepsVerificationOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNamesInput">templateNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNames">templateNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateNamesInput`<sup>Optional</sup> <a name="templateNamesInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNamesInput"></a>

```typescript
public readonly templateNamesInput: string[];
```

- *Type:* string[]

---

##### `templateNames`<sup>Required</sup> <a name="templateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.templateNames"></a>

```typescript
public readonly templateNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdStrategyCanaryStepsVerification;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyCanaryStepsVerification">OceancdStrategyCanaryStepsVerification</a>

---


### OceancdStrategyRollingOutputReference <a name="OceancdStrategyRollingOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyRollingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.putSteps">putSteps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSteps` <a name="putSteps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.putSteps"></a>

```typescript
public putSteps(value: IResolvable | OceancdStrategyRollingSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.putSteps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList">OceancdStrategyRollingStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.stepsInput">stepsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.steps"></a>

```typescript
public readonly steps: OceancdStrategyRollingStepsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList">OceancdStrategyRollingStepsList</a>

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | OceancdStrategyRollingSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdStrategyRolling;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRolling">OceancdStrategyRolling</a>

---


### OceancdStrategyRollingStepsList <a name="OceancdStrategyRollingStepsList" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyRollingStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.get"></a>

```typescript
public get(index: number): OceancdStrategyRollingStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdStrategyRollingSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>[]

---


### OceancdStrategyRollingStepsOutputReference <a name="OceancdStrategyRollingStepsOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyRollingStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putPause">putPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putVerification">putVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetPause">resetPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetStepsName">resetStepsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetVerification">resetVerification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPause` <a name="putPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putPause"></a>

```typescript
public putPause(value: OceancdStrategyRollingStepsPause): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putPause.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

---

##### `putVerification` <a name="putVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putVerification"></a>

```typescript
public putVerification(value: OceancdStrategyRollingStepsVerification): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.putVerification.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

---

##### `resetPause` <a name="resetPause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetPause"></a>

```typescript
public resetPause(): void
```

##### `resetStepsName` <a name="resetStepsName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetStepsName"></a>

```typescript
public resetStepsName(): void
```

##### `resetVerification` <a name="resetVerification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.resetVerification"></a>

```typescript
public resetVerification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pause">pause</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference">OceancdStrategyRollingStepsPauseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verification">verification</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference">OceancdStrategyRollingStepsVerificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pauseInput">pauseInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsNameInput">stepsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verificationInput">verificationInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsName">stepsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pause`<sup>Required</sup> <a name="pause" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pause"></a>

```typescript
public readonly pause: OceancdStrategyRollingStepsPauseOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference">OceancdStrategyRollingStepsPauseOutputReference</a>

---

##### `verification`<sup>Required</sup> <a name="verification" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verification"></a>

```typescript
public readonly verification: OceancdStrategyRollingStepsVerificationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference">OceancdStrategyRollingStepsVerificationOutputReference</a>

---

##### `pauseInput`<sup>Optional</sup> <a name="pauseInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.pauseInput"></a>

```typescript
public readonly pauseInput: OceancdStrategyRollingStepsPause;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

---

##### `stepsNameInput`<sup>Optional</sup> <a name="stepsNameInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsNameInput"></a>

```typescript
public readonly stepsNameInput: string;
```

- *Type:* string

---

##### `verificationInput`<sup>Optional</sup> <a name="verificationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.verificationInput"></a>

```typescript
public readonly verificationInput: OceancdStrategyRollingStepsVerification;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

---

##### `stepsName`<sup>Required</sup> <a name="stepsName" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.stepsName"></a>

```typescript
public readonly stepsName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdStrategyRollingSteps;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingSteps">OceancdStrategyRollingSteps</a>

---


### OceancdStrategyRollingStepsPauseOutputReference <a name="OceancdStrategyRollingStepsPauseOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPauseOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdStrategyRollingStepsPause;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsPause">OceancdStrategyRollingStepsPause</a>

---


### OceancdStrategyRollingStepsVerificationOutputReference <a name="OceancdStrategyRollingStepsVerificationOutputReference" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer"></a>

```typescript
import { oceancdStrategy } from '@cdktf/provider-spotinst'

new oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNamesInput">templateNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNames">templateNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateNamesInput`<sup>Optional</sup> <a name="templateNamesInput" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNamesInput"></a>

```typescript
public readonly templateNamesInput: string[];
```

- *Type:* string[]

---

##### `templateNames`<sup>Required</sup> <a name="templateNames" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.templateNames"></a>

```typescript
public readonly templateNames: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerificationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdStrategyRollingStepsVerification;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdStrategy.OceancdStrategyRollingStepsVerification">OceancdStrategyRollingStepsVerification</a>

---



