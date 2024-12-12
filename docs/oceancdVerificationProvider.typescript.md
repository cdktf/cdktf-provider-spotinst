# `oceancdVerificationProvider` Submodule <a name="`oceancdVerificationProvider` Submodule" id="@cdktf/provider-spotinst.oceancdVerificationProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdVerificationProvider <a name="OceancdVerificationProvider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider spotinst_oceancd_verification_provider}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

new oceancdVerificationProvider.OceancdVerificationProvider(scope: Construct, id: string, config: OceancdVerificationProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig">OceancdVerificationProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig">OceancdVerificationProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putCloudWatch">putCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putDatadog">putDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putJenkins">putJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putNewRelic">putNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putPrometheus">putPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetCloudWatch">resetCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetDatadog">resetDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetJenkins">resetJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetNewRelic">resetNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetPrometheus">resetPrometheus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudWatch` <a name="putCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putCloudWatch"></a>

```typescript
public putCloudWatch(value: OceancdVerificationProviderCloudWatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putCloudWatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

---

##### `putDatadog` <a name="putDatadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putDatadog"></a>

```typescript
public putDatadog(value: OceancdVerificationProviderDatadog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

---

##### `putJenkins` <a name="putJenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putJenkins"></a>

```typescript
public putJenkins(value: OceancdVerificationProviderJenkins): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putJenkins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

---

##### `putNewRelic` <a name="putNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putNewRelic"></a>

```typescript
public putNewRelic(value: OceancdVerificationProviderNewRelic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

---

##### `putPrometheus` <a name="putPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putPrometheus"></a>

```typescript
public putPrometheus(value: OceancdVerificationProviderPrometheus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.putPrometheus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

---

##### `resetCloudWatch` <a name="resetCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetCloudWatch"></a>

```typescript
public resetCloudWatch(): void
```

##### `resetDatadog` <a name="resetDatadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetDatadog"></a>

```typescript
public resetDatadog(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetId"></a>

```typescript
public resetId(): void
```

##### `resetJenkins` <a name="resetJenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetJenkins"></a>

```typescript
public resetJenkins(): void
```

##### `resetNewRelic` <a name="resetNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetNewRelic"></a>

```typescript
public resetNewRelic(): void
```

##### `resetPrometheus` <a name="resetPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.resetPrometheus"></a>

```typescript
public resetPrometheus(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceancdVerificationProvider resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isConstruct"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

oceancdVerificationProvider.OceancdVerificationProvider.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformElement"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

oceancdVerificationProvider.OceancdVerificationProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformResource"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

oceancdVerificationProvider.OceancdVerificationProvider.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OceancdVerificationProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceancdVerificationProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceancdVerificationProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceancdVerificationProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatch">cloudWatch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference">OceancdVerificationProviderCloudWatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference">OceancdVerificationProviderDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkins">jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference">OceancdVerificationProviderJenkinsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelic">newRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference">OceancdVerificationProviderNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference">OceancdVerificationProviderPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatchInput">cloudWatchInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIdsInput">clusterIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadogInput">datadogInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkinsInput">jenkinsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelicInput">newRelicInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheusInput">prometheusInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIds">clusterIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `cloudWatch`<sup>Required</sup> <a name="cloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatch"></a>

```typescript
public readonly cloudWatch: OceancdVerificationProviderCloudWatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference">OceancdVerificationProviderCloudWatchOutputReference</a>

---

##### `datadog`<sup>Required</sup> <a name="datadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadog"></a>

```typescript
public readonly datadog: OceancdVerificationProviderDatadogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference">OceancdVerificationProviderDatadogOutputReference</a>

---

##### `jenkins`<sup>Required</sup> <a name="jenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkins"></a>

```typescript
public readonly jenkins: OceancdVerificationProviderJenkinsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference">OceancdVerificationProviderJenkinsOutputReference</a>

---

##### `newRelic`<sup>Required</sup> <a name="newRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelic"></a>

```typescript
public readonly newRelic: OceancdVerificationProviderNewRelicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference">OceancdVerificationProviderNewRelicOutputReference</a>

---

##### `prometheus`<sup>Required</sup> <a name="prometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheus"></a>

```typescript
public readonly prometheus: OceancdVerificationProviderPrometheusOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference">OceancdVerificationProviderPrometheusOutputReference</a>

---

##### `cloudWatchInput`<sup>Optional</sup> <a name="cloudWatchInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.cloudWatchInput"></a>

```typescript
public readonly cloudWatchInput: OceancdVerificationProviderCloudWatch;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

---

##### `clusterIdsInput`<sup>Optional</sup> <a name="clusterIdsInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIdsInput"></a>

```typescript
public readonly clusterIdsInput: string[];
```

- *Type:* string[]

---

##### `datadogInput`<sup>Optional</sup> <a name="datadogInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.datadogInput"></a>

```typescript
public readonly datadogInput: OceancdVerificationProviderDatadog;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `jenkinsInput`<sup>Optional</sup> <a name="jenkinsInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.jenkinsInput"></a>

```typescript
public readonly jenkinsInput: OceancdVerificationProviderJenkins;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `newRelicInput`<sup>Optional</sup> <a name="newRelicInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.newRelicInput"></a>

```typescript
public readonly newRelicInput: OceancdVerificationProviderNewRelic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

---

##### `prometheusInput`<sup>Optional</sup> <a name="prometheusInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.prometheusInput"></a>

```typescript
public readonly prometheusInput: OceancdVerificationProviderPrometheus;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

---

##### `clusterIds`<sup>Required</sup> <a name="clusterIds" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.clusterIds"></a>

```typescript
public readonly clusterIds: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdVerificationProviderCloudWatch <a name="OceancdVerificationProviderCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch.Initializer"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

const oceancdVerificationProviderCloudWatch: oceancdVerificationProvider.OceancdVerificationProviderCloudWatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch.property.iamArn">iamArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#iam_arn OceancdVerificationProvider#iam_arn}. |

---

##### `iamArn`<sup>Required</sup> <a name="iamArn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch.property.iamArn"></a>

```typescript
public readonly iamArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#iam_arn OceancdVerificationProvider#iam_arn}.

---

### OceancdVerificationProviderConfig <a name="OceancdVerificationProviderConfig" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.Initializer"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

const oceancdVerificationProviderConfig: oceancdVerificationProvider.OceancdVerificationProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.clusterIds">clusterIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#cluster_ids OceancdVerificationProvider#cluster_ids}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#name OceancdVerificationProvider#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.cloudWatch">cloudWatch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a></code> | cloud_watch block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a></code> | datadog block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#id OceancdVerificationProvider#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.jenkins">jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a></code> | jenkins block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.newRelic">newRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a></code> | new_relic block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a></code> | prometheus block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `clusterIds`<sup>Required</sup> <a name="clusterIds" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.clusterIds"></a>

```typescript
public readonly clusterIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#cluster_ids OceancdVerificationProvider#cluster_ids}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#name OceancdVerificationProvider#name}.

---

##### `cloudWatch`<sup>Optional</sup> <a name="cloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.cloudWatch"></a>

```typescript
public readonly cloudWatch: OceancdVerificationProviderCloudWatch;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

cloud_watch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#cloud_watch OceancdVerificationProvider#cloud_watch}

---

##### `datadog`<sup>Optional</sup> <a name="datadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.datadog"></a>

```typescript
public readonly datadog: OceancdVerificationProviderDatadog;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

datadog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#datadog OceancdVerificationProvider#datadog}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#id OceancdVerificationProvider#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `jenkins`<sup>Optional</sup> <a name="jenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.jenkins"></a>

```typescript
public readonly jenkins: OceancdVerificationProviderJenkins;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

jenkins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#jenkins OceancdVerificationProvider#jenkins}

---

##### `newRelic`<sup>Optional</sup> <a name="newRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.newRelic"></a>

```typescript
public readonly newRelic: OceancdVerificationProviderNewRelic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

new_relic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#new_relic OceancdVerificationProvider#new_relic}

---

##### `prometheus`<sup>Optional</sup> <a name="prometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderConfig.property.prometheus"></a>

```typescript
public readonly prometheus: OceancdVerificationProviderPrometheus;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#prometheus OceancdVerificationProvider#prometheus}

---

### OceancdVerificationProviderDatadog <a name="OceancdVerificationProviderDatadog" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.Initializer"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

const oceancdVerificationProviderDatadog: oceancdVerificationProvider.OceancdVerificationProviderDatadog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.apiKey">apiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#api_key OceancdVerificationProvider#api_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.appKey">appKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#app_key OceancdVerificationProvider#app_key}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}.

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#api_key OceancdVerificationProvider#api_key}.

---

##### `appKey`<sup>Required</sup> <a name="appKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog.property.appKey"></a>

```typescript
public readonly appKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#app_key OceancdVerificationProvider#app_key}.

---

### OceancdVerificationProviderJenkins <a name="OceancdVerificationProviderJenkins" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.Initializer"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

const oceancdVerificationProviderJenkins: oceancdVerificationProvider.OceancdVerificationProviderJenkins = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.apiToken">apiToken</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#api_token OceancdVerificationProvider#api_token}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.baseUrl">baseUrl</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#base_url OceancdVerificationProvider#base_url}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#username OceancdVerificationProvider#username}. |

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#api_token OceancdVerificationProvider#api_token}.

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#base_url OceancdVerificationProvider#base_url}.

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#username OceancdVerificationProvider#username}.

---

### OceancdVerificationProviderNewRelic <a name="OceancdVerificationProviderNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.Initializer"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

const oceancdVerificationProviderNewRelic: oceancdVerificationProvider.OceancdVerificationProviderNewRelic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#account_id OceancdVerificationProvider#account_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.personalApiKey">personalApiKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#personal_api_key OceancdVerificationProvider#personal_api_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlNerdGraph">baseUrlNerdGraph</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#base_url_nerd_graph OceancdVerificationProvider#base_url_nerd_graph}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlRest">baseUrlRest</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#base_url_rest OceancdVerificationProvider#base_url_rest}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#region OceancdVerificationProvider#region}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#account_id OceancdVerificationProvider#account_id}.

---

##### `personalApiKey`<sup>Required</sup> <a name="personalApiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.personalApiKey"></a>

```typescript
public readonly personalApiKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#personal_api_key OceancdVerificationProvider#personal_api_key}.

---

##### `baseUrlNerdGraph`<sup>Optional</sup> <a name="baseUrlNerdGraph" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlNerdGraph"></a>

```typescript
public readonly baseUrlNerdGraph: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#base_url_nerd_graph OceancdVerificationProvider#base_url_nerd_graph}.

---

##### `baseUrlRest`<sup>Optional</sup> <a name="baseUrlRest" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.baseUrlRest"></a>

```typescript
public readonly baseUrlRest: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#base_url_rest OceancdVerificationProvider#base_url_rest}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#region OceancdVerificationProvider#region}.

---

### OceancdVerificationProviderPrometheus <a name="OceancdVerificationProviderPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus.Initializer"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

const oceancdVerificationProviderPrometheus: oceancdVerificationProvider.OceancdVerificationProviderPrometheus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}. |

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.201.0/docs/resources/oceancd_verification_provider#address OceancdVerificationProvider#address}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdVerificationProviderCloudWatchOutputReference <a name="OceancdVerificationProviderCloudWatchOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

new oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArnInput">iamArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArn">iamArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `iamArnInput`<sup>Optional</sup> <a name="iamArnInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArnInput"></a>

```typescript
public readonly iamArnInput: string;
```

- *Type:* string

---

##### `iamArn`<sup>Required</sup> <a name="iamArn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.iamArn"></a>

```typescript
public readonly iamArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationProviderCloudWatch;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderCloudWatch">OceancdVerificationProviderCloudWatch</a>

---


### OceancdVerificationProviderDatadogOutputReference <a name="OceancdVerificationProviderDatadogOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

new oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKeyInput">appKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKey">apiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKey">appKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKeyInput"></a>

```typescript
public readonly apiKeyInput: string;
```

- *Type:* string

---

##### `appKeyInput`<sup>Optional</sup> <a name="appKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKeyInput"></a>

```typescript
public readonly appKeyInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.apiKey"></a>

```typescript
public readonly apiKey: string;
```

- *Type:* string

---

##### `appKey`<sup>Required</sup> <a name="appKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.appKey"></a>

```typescript
public readonly appKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationProviderDatadog;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderDatadog">OceancdVerificationProviderDatadog</a>

---


### OceancdVerificationProviderJenkinsOutputReference <a name="OceancdVerificationProviderJenkinsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

new oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiTokenInput">apiTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrlInput">baseUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiToken">apiToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrl">baseUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `apiTokenInput`<sup>Optional</sup> <a name="apiTokenInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiTokenInput"></a>

```typescript
public readonly apiTokenInput: string;
```

- *Type:* string

---

##### `baseUrlInput`<sup>Optional</sup> <a name="baseUrlInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrlInput"></a>

```typescript
public readonly baseUrlInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `apiToken`<sup>Required</sup> <a name="apiToken" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.apiToken"></a>

```typescript
public readonly apiToken: string;
```

- *Type:* string

---

##### `baseUrl`<sup>Required</sup> <a name="baseUrl" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.baseUrl"></a>

```typescript
public readonly baseUrl: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkinsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationProviderJenkins;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderJenkins">OceancdVerificationProviderJenkins</a>

---


### OceancdVerificationProviderNewRelicOutputReference <a name="OceancdVerificationProviderNewRelicOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

new oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlNerdGraph">resetBaseUrlNerdGraph</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlRest">resetBaseUrlRest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBaseUrlNerdGraph` <a name="resetBaseUrlNerdGraph" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlNerdGraph"></a>

```typescript
public resetBaseUrlNerdGraph(): void
```

##### `resetBaseUrlRest` <a name="resetBaseUrlRest" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetBaseUrlRest"></a>

```typescript
public resetBaseUrlRest(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.resetRegion"></a>

```typescript
public resetRegion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraphInput">baseUrlNerdGraphInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRestInput">baseUrlRestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKeyInput">personalApiKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraph">baseUrlNerdGraph</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRest">baseUrlRest</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKey">personalApiKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `baseUrlNerdGraphInput`<sup>Optional</sup> <a name="baseUrlNerdGraphInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraphInput"></a>

```typescript
public readonly baseUrlNerdGraphInput: string;
```

- *Type:* string

---

##### `baseUrlRestInput`<sup>Optional</sup> <a name="baseUrlRestInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRestInput"></a>

```typescript
public readonly baseUrlRestInput: string;
```

- *Type:* string

---

##### `personalApiKeyInput`<sup>Optional</sup> <a name="personalApiKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKeyInput"></a>

```typescript
public readonly personalApiKeyInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `baseUrlNerdGraph`<sup>Required</sup> <a name="baseUrlNerdGraph" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlNerdGraph"></a>

```typescript
public readonly baseUrlNerdGraph: string;
```

- *Type:* string

---

##### `baseUrlRest`<sup>Required</sup> <a name="baseUrlRest" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.baseUrlRest"></a>

```typescript
public readonly baseUrlRest: string;
```

- *Type:* string

---

##### `personalApiKey`<sup>Required</sup> <a name="personalApiKey" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.personalApiKey"></a>

```typescript
public readonly personalApiKey: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationProviderNewRelic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderNewRelic">OceancdVerificationProviderNewRelic</a>

---


### OceancdVerificationProviderPrometheusOutputReference <a name="OceancdVerificationProviderPrometheusOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationProvider } from '@cdktf/provider-spotinst'

new oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationProviderPrometheus;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationProvider.OceancdVerificationProviderPrometheus">OceancdVerificationProviderPrometheus</a>

---



