# `oceanSpark` Submodule <a name="`oceanSpark` Submodule" id="@cdktf/provider-spotinst.oceanSpark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceanSpark <a name="OceanSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark spotinst_ocean_spark}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

new oceanSpark.OceanSpark(scope: Construct, id: string, config: OceanSparkConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig">OceanSparkConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig">OceanSparkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute">putCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress">putIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection">putLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark">putSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook">putWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetCompute">resetCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetIngress">resetIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetLogCollection">resetLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetSpark">resetSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWebhook">resetWebhook</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCompute` <a name="putCompute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute"></a>

```typescript
public putCompute(value: OceanSparkCompute): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putCompute.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---

##### `putIngress` <a name="putIngress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress"></a>

```typescript
public putIngress(value: OceanSparkIngress): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putIngress.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---

##### `putLogCollection` <a name="putLogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection"></a>

```typescript
public putLogCollection(value: OceanSparkLogCollection): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putLogCollection.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---

##### `putSpark` <a name="putSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark"></a>

```typescript
public putSpark(value: OceanSparkSpark): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putSpark.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---

##### `putWebhook` <a name="putWebhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook"></a>

```typescript
public putWebhook(value: OceanSparkWebhook): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.putWebhook.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---

##### `resetCompute` <a name="resetCompute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetCompute"></a>

```typescript
public resetCompute(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngress` <a name="resetIngress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetIngress"></a>

```typescript
public resetIngress(): void
```

##### `resetLogCollection` <a name="resetLogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetLogCollection"></a>

```typescript
public resetLogCollection(): void
```

##### `resetSpark` <a name="resetSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetSpark"></a>

```typescript
public resetSpark(): void
```

##### `resetWebhook` <a name="resetWebhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.resetWebhook"></a>

```typescript
public resetWebhook(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceanSpark resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

oceanSpark.OceanSpark.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

oceanSpark.OceanSpark.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

oceanSpark.OceanSpark.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

oceanSpark.OceanSpark.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OceanSpark resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceanSpark to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceanSpark that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceanSpark to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference">OceanSparkComputeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference">OceanSparkIngressOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollection">logCollection</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference">OceanSparkLogCollectionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference">OceanSparkSparkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference">OceanSparkWebhookOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.computeInput">computeInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingressInput">ingressInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollectionInput">logCollectionInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterIdInput">oceanClusterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.sparkInput">sparkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhookInput">webhookInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterId">oceanClusterId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `compute`<sup>Required</sup> <a name="compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.compute"></a>

```typescript
public readonly compute: OceanSparkComputeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference">OceanSparkComputeOutputReference</a>

---

##### `ingress`<sup>Required</sup> <a name="ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingress"></a>

```typescript
public readonly ingress: OceanSparkIngressOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference">OceanSparkIngressOutputReference</a>

---

##### `logCollection`<sup>Required</sup> <a name="logCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollection"></a>

```typescript
public readonly logCollection: OceanSparkLogCollectionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference">OceanSparkLogCollectionOutputReference</a>

---

##### `spark`<sup>Required</sup> <a name="spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.spark"></a>

```typescript
public readonly spark: OceanSparkSparkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference">OceanSparkSparkOutputReference</a>

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhook"></a>

```typescript
public readonly webhook: OceanSparkWebhookOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference">OceanSparkWebhookOutputReference</a>

---

##### `computeInput`<sup>Optional</sup> <a name="computeInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.computeInput"></a>

```typescript
public readonly computeInput: OceanSparkCompute;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressInput`<sup>Optional</sup> <a name="ingressInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.ingressInput"></a>

```typescript
public readonly ingressInput: OceanSparkIngress;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---

##### `logCollectionInput`<sup>Optional</sup> <a name="logCollectionInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.logCollectionInput"></a>

```typescript
public readonly logCollectionInput: OceanSparkLogCollection;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---

##### `oceanClusterIdInput`<sup>Optional</sup> <a name="oceanClusterIdInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterIdInput"></a>

```typescript
public readonly oceanClusterIdInput: string;
```

- *Type:* string

---

##### `sparkInput`<sup>Optional</sup> <a name="sparkInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.sparkInput"></a>

```typescript
public readonly sparkInput: OceanSparkSpark;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.webhookInput"></a>

```typescript
public readonly webhookInput: OceanSparkWebhook;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `oceanClusterId`<sup>Required</sup> <a name="oceanClusterId" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.oceanClusterId"></a>

```typescript
public readonly oceanClusterId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceanSpark.OceanSpark.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceanSparkCompute <a name="OceanSparkCompute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

const oceanSparkCompute: oceanSpark.OceanSparkCompute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.createVngs">createVngs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#create_vngs OceanSpark#create_vngs}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.useTaints">useTaints</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#use_taints OceanSpark#use_taints}. |

---

##### `createVngs`<sup>Optional</sup> <a name="createVngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.createVngs"></a>

```typescript
public readonly createVngs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#create_vngs OceanSpark#create_vngs}.

---

##### `useTaints`<sup>Optional</sup> <a name="useTaints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute.property.useTaints"></a>

```typescript
public readonly useTaints: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#use_taints OceanSpark#use_taints}.

---

### OceanSparkConfig <a name="OceanSparkConfig" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

const oceanSparkConfig: oceanSpark.OceanSparkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.oceanClusterId">oceanClusterId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.compute">compute</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | compute block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#id OceanSpark#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.ingress">ingress</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | ingress block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.logCollection">logCollection</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | log_collection block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.spark">spark</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | spark block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.webhook">webhook</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | webhook block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `oceanClusterId`<sup>Required</sup> <a name="oceanClusterId" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.oceanClusterId"></a>

```typescript
public readonly oceanClusterId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#ocean_cluster_id OceanSpark#ocean_cluster_id}.

---

##### `compute`<sup>Optional</sup> <a name="compute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.compute"></a>

```typescript
public readonly compute: OceanSparkCompute;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

compute block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#compute OceanSpark#compute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#id OceanSpark#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingress`<sup>Optional</sup> <a name="ingress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.ingress"></a>

```typescript
public readonly ingress: OceanSparkIngress;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

ingress block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#ingress OceanSpark#ingress}

---

##### `logCollection`<sup>Optional</sup> <a name="logCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.logCollection"></a>

```typescript
public readonly logCollection: OceanSparkLogCollection;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

log_collection block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#log_collection OceanSpark#log_collection}

---

##### `spark`<sup>Optional</sup> <a name="spark" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.spark"></a>

```typescript
public readonly spark: OceanSparkSpark;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

spark block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#spark OceanSpark#spark}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkConfig.property.webhook"></a>

```typescript
public readonly webhook: OceanSparkWebhook;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

webhook block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#webhook OceanSpark#webhook}

---

### OceanSparkIngress <a name="OceanSparkIngress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

const oceanSparkIngress: oceanSpark.OceanSparkIngress = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.controller">controller</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | controller block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.customEndpoint">customEndpoint</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | custom_endpoint block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | load_balancer block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.privateLink">privateLink</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | private_link block. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.serviceAnnotations">serviceAnnotations</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}. |

---

##### `controller`<sup>Optional</sup> <a name="controller" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.controller"></a>

```typescript
public readonly controller: OceanSparkIngressController;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

controller block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#controller OceanSpark#controller}

---

##### `customEndpoint`<sup>Optional</sup> <a name="customEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.customEndpoint"></a>

```typescript
public readonly customEndpoint: OceanSparkIngressCustomEndpoint;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

custom_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#custom_endpoint OceanSpark#custom_endpoint}

---

##### `loadBalancer`<sup>Optional</sup> <a name="loadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: OceanSparkIngressLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

load_balancer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#load_balancer OceanSpark#load_balancer}

---

##### `privateLink`<sup>Optional</sup> <a name="privateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.privateLink"></a>

```typescript
public readonly privateLink: OceanSparkIngressPrivateLink;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

private_link block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#private_link OceanSpark#private_link}

---

##### `serviceAnnotations`<sup>Optional</sup> <a name="serviceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress.property.serviceAnnotations"></a>

```typescript
public readonly serviceAnnotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}.

---

### OceanSparkIngressController <a name="OceanSparkIngressController" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

const oceanSparkIngressController: oceanSpark.OceanSparkIngressController = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#managed OceanSpark#managed}. |

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#managed OceanSpark#managed}.

---

### OceanSparkIngressCustomEndpoint <a name="OceanSparkIngressCustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

const oceanSparkIngressCustomEndpoint: oceanSpark.OceanSparkIngressCustomEndpoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.address">address</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#address OceanSpark#address}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#enabled OceanSpark#enabled}. |

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#address OceanSpark#address}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#enabled OceanSpark#enabled}.

---

### OceanSparkIngressLoadBalancer <a name="OceanSparkIngressLoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

const oceanSparkIngressLoadBalancer: oceanSpark.OceanSparkIngressLoadBalancer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#managed OceanSpark#managed}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.serviceAnnotations">serviceAnnotations</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#target_group_arn OceanSpark#target_group_arn}. |

---

##### `managed`<sup>Optional</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#managed OceanSpark#managed}.

---

##### `serviceAnnotations`<sup>Optional</sup> <a name="serviceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.serviceAnnotations"></a>

```typescript
public readonly serviceAnnotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#service_annotations OceanSpark#service_annotations}.

---

##### `targetGroupArn`<sup>Optional</sup> <a name="targetGroupArn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#target_group_arn OceanSpark#target_group_arn}.

---

### OceanSparkIngressPrivateLink <a name="OceanSparkIngressPrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

const oceanSparkIngressPrivateLink: oceanSpark.OceanSparkIngressPrivateLink = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#enabled OceanSpark#enabled}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.vpcEndpointService">vpcEndpointService</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#vpc_endpoint_service OceanSpark#vpc_endpoint_service}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#enabled OceanSpark#enabled}.

---

##### `vpcEndpointService`<sup>Optional</sup> <a name="vpcEndpointService" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink.property.vpcEndpointService"></a>

```typescript
public readonly vpcEndpointService: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#vpc_endpoint_service OceanSpark#vpc_endpoint_service}.

---

### OceanSparkLogCollection <a name="OceanSparkLogCollection" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

const oceanSparkLogCollection: oceanSpark.OceanSparkLogCollection = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.property.collectAppLogs">collectAppLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#collect_app_logs OceanSpark#collect_app_logs}. |

---

##### `collectAppLogs`<sup>Optional</sup> <a name="collectAppLogs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection.property.collectAppLogs"></a>

```typescript
public readonly collectAppLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#collect_app_logs OceanSpark#collect_app_logs}.

---

### OceanSparkSpark <a name="OceanSparkSpark" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

const oceanSparkSpark: oceanSpark.OceanSparkSpark = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.property.additionalAppNamespaces">additionalAppNamespaces</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#additional_app_namespaces OceanSpark#additional_app_namespaces}. |

---

##### `additionalAppNamespaces`<sup>Optional</sup> <a name="additionalAppNamespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark.property.additionalAppNamespaces"></a>

```typescript
public readonly additionalAppNamespaces: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#additional_app_namespaces OceanSpark#additional_app_namespaces}.

---

### OceanSparkWebhook <a name="OceanSparkWebhook" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

const oceanSparkWebhook: oceanSpark.OceanSparkWebhook = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.hostNetworkPorts">hostNetworkPorts</a></code> | <code>number[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#host_network_ports OceanSpark#host_network_ports}. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.useHostNetwork">useHostNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#use_host_network OceanSpark#use_host_network}. |

---

##### `hostNetworkPorts`<sup>Optional</sup> <a name="hostNetworkPorts" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.hostNetworkPorts"></a>

```typescript
public readonly hostNetworkPorts: number[];
```

- *Type:* number[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#host_network_ports OceanSpark#host_network_ports}.

---

##### `useHostNetwork`<sup>Optional</sup> <a name="useHostNetwork" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook.property.useHostNetwork"></a>

```typescript
public readonly useHostNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.195.1/docs/resources/ocean_spark#use_host_network OceanSpark#use_host_network}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceanSparkComputeOutputReference <a name="OceanSparkComputeOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

new oceanSpark.OceanSparkComputeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetCreateVngs">resetCreateVngs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetUseTaints">resetUseTaints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreateVngs` <a name="resetCreateVngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetCreateVngs"></a>

```typescript
public resetCreateVngs(): void
```

##### `resetUseTaints` <a name="resetUseTaints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.resetUseTaints"></a>

```typescript
public resetUseTaints(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngsInput">createVngsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaintsInput">useTaintsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngs">createVngs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaints">useTaints</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createVngsInput`<sup>Optional</sup> <a name="createVngsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngsInput"></a>

```typescript
public readonly createVngsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useTaintsInput`<sup>Optional</sup> <a name="useTaintsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaintsInput"></a>

```typescript
public readonly useTaintsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `createVngs`<sup>Required</sup> <a name="createVngs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.createVngs"></a>

```typescript
public readonly createVngs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `useTaints`<sup>Required</sup> <a name="useTaints" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.useTaints"></a>

```typescript
public readonly useTaints: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkComputeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanSparkCompute;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkCompute">OceanSparkCompute</a>

---


### OceanSparkIngressControllerOutputReference <a name="OceanSparkIngressControllerOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

new oceanSpark.OceanSparkIngressControllerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resetManaged">resetManaged</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.resetManaged"></a>

```typescript
public resetManaged(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managedInput">managedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managedInput"></a>

```typescript
public readonly managedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanSparkIngressController;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---


### OceanSparkIngressCustomEndpointOutputReference <a name="OceanSparkIngressCustomEndpointOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

new oceanSpark.OceanSparkIngressCustomEndpointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetAddress"></a>

```typescript
public resetAddress(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.addressInput">addressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.address">address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.addressInput"></a>

```typescript
public readonly addressInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.address"></a>

```typescript
public readonly address: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanSparkIngressCustomEndpoint;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---


### OceanSparkIngressLoadBalancerOutputReference <a name="OceanSparkIngressLoadBalancerOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

new oceanSpark.OceanSparkIngressLoadBalancerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetManaged">resetManaged</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetServiceAnnotations">resetServiceAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetTargetGroupArn">resetTargetGroupArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetManaged` <a name="resetManaged" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetManaged"></a>

```typescript
public resetManaged(): void
```

##### `resetServiceAnnotations` <a name="resetServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetServiceAnnotations"></a>

```typescript
public resetServiceAnnotations(): void
```

##### `resetTargetGroupArn` <a name="resetTargetGroupArn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.resetTargetGroupArn"></a>

```typescript
public resetTargetGroupArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managedInput">managedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotationsInput">serviceAnnotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArnInput">targetGroupArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managed">managed</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotations">serviceAnnotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArn">targetGroupArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `managedInput`<sup>Optional</sup> <a name="managedInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managedInput"></a>

```typescript
public readonly managedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceAnnotationsInput`<sup>Optional</sup> <a name="serviceAnnotationsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotationsInput"></a>

```typescript
public readonly serviceAnnotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetGroupArnInput`<sup>Optional</sup> <a name="targetGroupArnInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArnInput"></a>

```typescript
public readonly targetGroupArnInput: string;
```

- *Type:* string

---

##### `managed`<sup>Required</sup> <a name="managed" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.managed"></a>

```typescript
public readonly managed: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `serviceAnnotations`<sup>Required</sup> <a name="serviceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.serviceAnnotations"></a>

```typescript
public readonly serviceAnnotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `targetGroupArn`<sup>Required</sup> <a name="targetGroupArn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.targetGroupArn"></a>

```typescript
public readonly targetGroupArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanSparkIngressLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---


### OceanSparkIngressOutputReference <a name="OceanSparkIngressOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

new oceanSpark.OceanSparkIngressOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController">putController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint">putCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer">putLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink">putPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetController">resetController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetCustomEndpoint">resetCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetLoadBalancer">resetLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetPrivateLink">resetPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetServiceAnnotations">resetServiceAnnotations</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putController` <a name="putController" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController"></a>

```typescript
public putController(value: OceanSparkIngressController): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putController.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---

##### `putCustomEndpoint` <a name="putCustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint"></a>

```typescript
public putCustomEndpoint(value: OceanSparkIngressCustomEndpoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putCustomEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---

##### `putLoadBalancer` <a name="putLoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer"></a>

```typescript
public putLoadBalancer(value: OceanSparkIngressLoadBalancer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putLoadBalancer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---

##### `putPrivateLink` <a name="putPrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink"></a>

```typescript
public putPrivateLink(value: OceanSparkIngressPrivateLink): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.putPrivateLink.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---

##### `resetController` <a name="resetController" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetController"></a>

```typescript
public resetController(): void
```

##### `resetCustomEndpoint` <a name="resetCustomEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetCustomEndpoint"></a>

```typescript
public resetCustomEndpoint(): void
```

##### `resetLoadBalancer` <a name="resetLoadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetLoadBalancer"></a>

```typescript
public resetLoadBalancer(): void
```

##### `resetPrivateLink` <a name="resetPrivateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetPrivateLink"></a>

```typescript
public resetPrivateLink(): void
```

##### `resetServiceAnnotations` <a name="resetServiceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.resetServiceAnnotations"></a>

```typescript
public resetServiceAnnotations(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controller">controller</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference">OceanSparkIngressControllerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpoint">customEndpoint</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference">OceanSparkIngressCustomEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancer">loadBalancer</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference">OceanSparkIngressLoadBalancerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLink">privateLink</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference">OceanSparkIngressPrivateLinkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controllerInput">controllerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpointInput">customEndpointInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancerInput">loadBalancerInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLinkInput">privateLinkInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotationsInput">serviceAnnotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotations">serviceAnnotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `controller`<sup>Required</sup> <a name="controller" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controller"></a>

```typescript
public readonly controller: OceanSparkIngressControllerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressControllerOutputReference">OceanSparkIngressControllerOutputReference</a>

---

##### `customEndpoint`<sup>Required</sup> <a name="customEndpoint" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpoint"></a>

```typescript
public readonly customEndpoint: OceanSparkIngressCustomEndpointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpointOutputReference">OceanSparkIngressCustomEndpointOutputReference</a>

---

##### `loadBalancer`<sup>Required</sup> <a name="loadBalancer" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancer"></a>

```typescript
public readonly loadBalancer: OceanSparkIngressLoadBalancerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancerOutputReference">OceanSparkIngressLoadBalancerOutputReference</a>

---

##### `privateLink`<sup>Required</sup> <a name="privateLink" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLink"></a>

```typescript
public readonly privateLink: OceanSparkIngressPrivateLinkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference">OceanSparkIngressPrivateLinkOutputReference</a>

---

##### `controllerInput`<sup>Optional</sup> <a name="controllerInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.controllerInput"></a>

```typescript
public readonly controllerInput: OceanSparkIngressController;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressController">OceanSparkIngressController</a>

---

##### `customEndpointInput`<sup>Optional</sup> <a name="customEndpointInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.customEndpointInput"></a>

```typescript
public readonly customEndpointInput: OceanSparkIngressCustomEndpoint;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressCustomEndpoint">OceanSparkIngressCustomEndpoint</a>

---

##### `loadBalancerInput`<sup>Optional</sup> <a name="loadBalancerInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.loadBalancerInput"></a>

```typescript
public readonly loadBalancerInput: OceanSparkIngressLoadBalancer;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressLoadBalancer">OceanSparkIngressLoadBalancer</a>

---

##### `privateLinkInput`<sup>Optional</sup> <a name="privateLinkInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.privateLinkInput"></a>

```typescript
public readonly privateLinkInput: OceanSparkIngressPrivateLink;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---

##### `serviceAnnotationsInput`<sup>Optional</sup> <a name="serviceAnnotationsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotationsInput"></a>

```typescript
public readonly serviceAnnotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `serviceAnnotations`<sup>Required</sup> <a name="serviceAnnotations" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.serviceAnnotations"></a>

```typescript
public readonly serviceAnnotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanSparkIngress;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngress">OceanSparkIngress</a>

---


### OceanSparkIngressPrivateLinkOutputReference <a name="OceanSparkIngressPrivateLinkOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

new oceanSpark.OceanSparkIngressPrivateLinkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetVpcEndpointService">resetVpcEndpointService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetVpcEndpointService` <a name="resetVpcEndpointService" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.resetVpcEndpointService"></a>

```typescript
public resetVpcEndpointService(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointServiceInput">vpcEndpointServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointService">vpcEndpointService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vpcEndpointServiceInput`<sup>Optional</sup> <a name="vpcEndpointServiceInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointServiceInput"></a>

```typescript
public readonly vpcEndpointServiceInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vpcEndpointService`<sup>Required</sup> <a name="vpcEndpointService" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.vpcEndpointService"></a>

```typescript
public readonly vpcEndpointService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLinkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanSparkIngressPrivateLink;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkIngressPrivateLink">OceanSparkIngressPrivateLink</a>

---


### OceanSparkLogCollectionOutputReference <a name="OceanSparkLogCollectionOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

new oceanSpark.OceanSparkLogCollectionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resetCollectAppLogs">resetCollectAppLogs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCollectAppLogs` <a name="resetCollectAppLogs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.resetCollectAppLogs"></a>

```typescript
public resetCollectAppLogs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogsInput">collectAppLogsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogs">collectAppLogs</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `collectAppLogsInput`<sup>Optional</sup> <a name="collectAppLogsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogsInput"></a>

```typescript
public readonly collectAppLogsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `collectAppLogs`<sup>Required</sup> <a name="collectAppLogs" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.collectAppLogs"></a>

```typescript
public readonly collectAppLogs: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollectionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanSparkLogCollection;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkLogCollection">OceanSparkLogCollection</a>

---


### OceanSparkSparkOutputReference <a name="OceanSparkSparkOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

new oceanSpark.OceanSparkSparkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resetAdditionalAppNamespaces">resetAdditionalAppNamespaces</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAdditionalAppNamespaces` <a name="resetAdditionalAppNamespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.resetAdditionalAppNamespaces"></a>

```typescript
public resetAdditionalAppNamespaces(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespacesInput">additionalAppNamespacesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespaces">additionalAppNamespaces</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `additionalAppNamespacesInput`<sup>Optional</sup> <a name="additionalAppNamespacesInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespacesInput"></a>

```typescript
public readonly additionalAppNamespacesInput: string[];
```

- *Type:* string[]

---

##### `additionalAppNamespaces`<sup>Required</sup> <a name="additionalAppNamespaces" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.additionalAppNamespaces"></a>

```typescript
public readonly additionalAppNamespaces: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkSparkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanSparkSpark;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkSpark">OceanSparkSpark</a>

---


### OceanSparkWebhookOutputReference <a name="OceanSparkWebhookOutputReference" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer"></a>

```typescript
import { oceanSpark } from '@cdktf/provider-spotinst'

new oceanSpark.OceanSparkWebhookOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetHostNetworkPorts">resetHostNetworkPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetUseHostNetwork">resetUseHostNetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHostNetworkPorts` <a name="resetHostNetworkPorts" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetHostNetworkPorts"></a>

```typescript
public resetHostNetworkPorts(): void
```

##### `resetUseHostNetwork` <a name="resetUseHostNetwork" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.resetUseHostNetwork"></a>

```typescript
public resetUseHostNetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPortsInput">hostNetworkPortsInput</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetworkInput">useHostNetworkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPorts">hostNetworkPorts</a></code> | <code>number[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetwork">useHostNetwork</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostNetworkPortsInput`<sup>Optional</sup> <a name="hostNetworkPortsInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPortsInput"></a>

```typescript
public readonly hostNetworkPortsInput: number[];
```

- *Type:* number[]

---

##### `useHostNetworkInput`<sup>Optional</sup> <a name="useHostNetworkInput" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetworkInput"></a>

```typescript
public readonly useHostNetworkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostNetworkPorts`<sup>Required</sup> <a name="hostNetworkPorts" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.hostNetworkPorts"></a>

```typescript
public readonly hostNetworkPorts: number[];
```

- *Type:* number[]

---

##### `useHostNetwork`<sup>Required</sup> <a name="useHostNetwork" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.useHostNetwork"></a>

```typescript
public readonly useHostNetwork: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhookOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceanSparkWebhook;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceanSpark.OceanSparkWebhook">OceanSparkWebhook</a>

---



