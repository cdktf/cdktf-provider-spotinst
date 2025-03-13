# `oceancdVerificationTemplate` Submodule <a name="`oceancdVerificationTemplate` Submodule" id="@cdktf/provider-spotinst.oceancdVerificationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OceancdVerificationTemplate <a name="OceancdVerificationTemplate" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template spotinst_oceancd_verification_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplate(scope: Construct, id: string, config: OceancdVerificationTemplateConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig">OceancdVerificationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig">OceancdVerificationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putArgs">putArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putMetrics">putMetrics</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetArgs">resetArgs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetMetrics">resetMetrics</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putArgs` <a name="putArgs" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putArgs"></a>

```typescript
public putArgs(value: IResolvable | OceancdVerificationTemplateArgs[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putArgs.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>[]

---

##### `putMetrics` <a name="putMetrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putMetrics"></a>

```typescript
public putMetrics(value: IResolvable | OceancdVerificationTemplateMetrics[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.putMetrics.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>[]

---

##### `resetArgs` <a name="resetArgs" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetArgs"></a>

```typescript
public resetArgs(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMetrics` <a name="resetMetrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.resetMetrics"></a>

```typescript
public resetMetrics(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OceancdVerificationTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isConstruct"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

oceancdVerificationTemplate.OceancdVerificationTemplate.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformElement"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformResource"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OceancdVerificationTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OceancdVerificationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OceancdVerificationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OceancdVerificationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.args">args</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList">OceancdVerificationTemplateArgsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.metrics">metrics</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList">OceancdVerificationTemplateMetricsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.argsInput">argsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.metricsInput">metricsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `args`<sup>Required</sup> <a name="args" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.args"></a>

```typescript
public readonly args: OceancdVerificationTemplateArgsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList">OceancdVerificationTemplateArgsList</a>

---

##### `metrics`<sup>Required</sup> <a name="metrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.metrics"></a>

```typescript
public readonly metrics: OceancdVerificationTemplateMetricsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList">OceancdVerificationTemplateMetricsList</a>

---

##### `argsInput`<sup>Optional</sup> <a name="argsInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.argsInput"></a>

```typescript
public readonly argsInput: IResolvable | OceancdVerificationTemplateArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `metricsInput`<sup>Optional</sup> <a name="metricsInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.metricsInput"></a>

```typescript
public readonly metricsInput: IResolvable | OceancdVerificationTemplateMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplate.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OceancdVerificationTemplateArgs <a name="OceancdVerificationTemplateArgs" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateArgs: oceancdVerificationTemplate.OceancdVerificationTemplateArgs = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.argName">argName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#arg_name OceancdVerificationTemplate#arg_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#value OceancdVerificationTemplate#value}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.valueFrom">valueFrom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a></code> | value_from block. |

---

##### `argName`<sup>Required</sup> <a name="argName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.argName"></a>

```typescript
public readonly argName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#arg_name OceancdVerificationTemplate#arg_name}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#value OceancdVerificationTemplate#value}.

---

##### `valueFrom`<sup>Optional</sup> <a name="valueFrom" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs.property.valueFrom"></a>

```typescript
public readonly valueFrom: OceancdVerificationTemplateArgsValueFrom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a>

value_from block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#value_from OceancdVerificationTemplate#value_from}

---

### OceancdVerificationTemplateArgsValueFrom <a name="OceancdVerificationTemplateArgsValueFrom" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateArgsValueFrom: oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a></code> | secret_key_ref block. |

---

##### `secretKeyRef`<sup>Optional</sup> <a name="secretKeyRef" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: OceancdVerificationTemplateArgsValueFromSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a>

secret_key_ref block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#secret_key_ref OceancdVerificationTemplate#secret_key_ref}

---

### OceancdVerificationTemplateArgsValueFromSecretKeyRef <a name="OceancdVerificationTemplateArgsValueFromSecretKeyRef" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateArgsValueFromSecretKeyRef: oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#key OceancdVerificationTemplate#key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#key OceancdVerificationTemplate#key}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}.

---

### OceancdVerificationTemplateConfig <a name="OceancdVerificationTemplateConfig" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateConfig: oceancdVerificationTemplate.OceancdVerificationTemplateConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.args">args</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>[]</code> | args block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.metrics">metrics</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>[]</code> | metrics block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#name OceancdVerificationTemplate#name}.

---

##### `args`<sup>Optional</sup> <a name="args" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.args"></a>

```typescript
public readonly args: IResolvable | OceancdVerificationTemplateArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>[]

args block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#args OceancdVerificationTemplate#args}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metrics`<sup>Optional</sup> <a name="metrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateConfig.property.metrics"></a>

```typescript
public readonly metrics: IResolvable | OceancdVerificationTemplateMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>[]

metrics block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#metrics OceancdVerificationTemplate#metrics}

---

### OceancdVerificationTemplateMetrics <a name="OceancdVerificationTemplateMetrics" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetrics: oceancdVerificationTemplate.OceancdVerificationTemplateMetrics = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.metricsName">metricsName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#metrics_name OceancdVerificationTemplate#metrics_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.provider">provider</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>[]</code> | provider block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.baseline">baseline</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a></code> | baseline block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.consecutiveErrorLimit">consecutiveErrorLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#consecutive_error_limit OceancdVerificationTemplate#consecutive_error_limit}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.count">count</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#count OceancdVerificationTemplate#count}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.dryRun">dryRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#dry_run OceancdVerificationTemplate#dry_run}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.failureCondition">failureCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#failure_condition OceancdVerificationTemplate#failure_condition}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.failureLimit">failureLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#failure_limit OceancdVerificationTemplate#failure_limit}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.initialDelay">initialDelay</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#initial_delay OceancdVerificationTemplate#initial_delay}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.interval">interval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#interval OceancdVerificationTemplate#interval}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.successCondition">successCondition</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#success_condition OceancdVerificationTemplate#success_condition}. |

---

##### `metricsName`<sup>Required</sup> <a name="metricsName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.metricsName"></a>

```typescript
public readonly metricsName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#metrics_name OceancdVerificationTemplate#metrics_name}.

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.provider"></a>

```typescript
public readonly provider: IResolvable | OceancdVerificationTemplateMetricsProvider[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>[]

provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#provider OceancdVerificationTemplate#provider}

---

##### `baseline`<sup>Optional</sup> <a name="baseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.baseline"></a>

```typescript
public readonly baseline: OceancdVerificationTemplateMetricsBaseline;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a>

baseline block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#baseline OceancdVerificationTemplate#baseline}

---

##### `consecutiveErrorLimit`<sup>Optional</sup> <a name="consecutiveErrorLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.consecutiveErrorLimit"></a>

```typescript
public readonly consecutiveErrorLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#consecutive_error_limit OceancdVerificationTemplate#consecutive_error_limit}.

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#count OceancdVerificationTemplate#count}.

---

##### `dryRun`<sup>Optional</sup> <a name="dryRun" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.dryRun"></a>

```typescript
public readonly dryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#dry_run OceancdVerificationTemplate#dry_run}.

---

##### `failureCondition`<sup>Optional</sup> <a name="failureCondition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.failureCondition"></a>

```typescript
public readonly failureCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#failure_condition OceancdVerificationTemplate#failure_condition}.

---

##### `failureLimit`<sup>Optional</sup> <a name="failureLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.failureLimit"></a>

```typescript
public readonly failureLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#failure_limit OceancdVerificationTemplate#failure_limit}.

---

##### `initialDelay`<sup>Optional</sup> <a name="initialDelay" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.initialDelay"></a>

```typescript
public readonly initialDelay: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#initial_delay OceancdVerificationTemplate#initial_delay}.

---

##### `interval`<sup>Optional</sup> <a name="interval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#interval OceancdVerificationTemplate#interval}.

---

##### `successCondition`<sup>Optional</sup> <a name="successCondition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics.property.successCondition"></a>

```typescript
public readonly successCondition: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#success_condition OceancdVerificationTemplate#success_condition}.

---

### OceancdVerificationTemplateMetricsBaseline <a name="OceancdVerificationTemplateMetricsBaseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsBaseline: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.baselineProvider">baselineProvider</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>[]</code> | baseline_provider block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.threshold">threshold</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#threshold OceancdVerificationTemplate#threshold}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.maxRange">maxRange</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#max_range OceancdVerificationTemplate#max_range}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.minRange">minRange</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#min_range OceancdVerificationTemplate#min_range}. |

---

##### `baselineProvider`<sup>Required</sup> <a name="baselineProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.baselineProvider"></a>

```typescript
public readonly baselineProvider: IResolvable | OceancdVerificationTemplateMetricsBaselineBaselineProvider[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>[]

baseline_provider block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#baseline_provider OceancdVerificationTemplate#baseline_provider}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#threshold OceancdVerificationTemplate#threshold}.

---

##### `maxRange`<sup>Optional</sup> <a name="maxRange" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.maxRange"></a>

```typescript
public readonly maxRange: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#max_range OceancdVerificationTemplate#max_range}.

---

##### `minRange`<sup>Optional</sup> <a name="minRange" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline.property.minRange"></a>

```typescript
public readonly minRange: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#min_range OceancdVerificationTemplate#min_range}.

---

### OceancdVerificationTemplateMetricsBaselineBaselineProvider <a name="OceancdVerificationTemplateMetricsBaselineBaselineProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsBaselineBaselineProvider: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a></code> | datadog block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.newRelic">newRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a></code> | new_relic block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a></code> | prometheus block. |

---

##### `datadog`<sup>Optional</sup> <a name="datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.datadog"></a>

```typescript
public readonly datadog: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a>

datadog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#datadog OceancdVerificationTemplate#datadog}

---

##### `newRelic`<sup>Optional</sup> <a name="newRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.newRelic"></a>

```typescript
public readonly newRelic: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a>

new_relic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#new_relic OceancdVerificationTemplate#new_relic}

---

##### `prometheus`<sup>Optional</sup> <a name="prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider.property.prometheus"></a>

```typescript
public readonly prometheus: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#prometheus OceancdVerificationTemplate#prometheus}

---

### OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.property.datadogQuery">datadogQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}. |

---

##### `datadogQuery`<sup>Required</sup> <a name="datadogQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.property.datadogQuery"></a>

```typescript
public readonly datadogQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}.

---

### OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.property.newRelicQuery">newRelicQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.property.profile">profile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}. |

---

##### `newRelicQuery`<sup>Required</sup> <a name="newRelicQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.property.newRelicQuery"></a>

```typescript
public readonly newRelicQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}.

---

### OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus.property.prometheusQuery">prometheusQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}. |

---

##### `prometheusQuery`<sup>Required</sup> <a name="prometheusQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus.property.prometheusQuery"></a>

```typescript
public readonly prometheusQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}.

---

### OceancdVerificationTemplateMetricsProvider <a name="OceancdVerificationTemplateMetricsProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProvider: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.cloudWatch">cloudWatch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a></code> | cloud_watch block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a></code> | datadog block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.jenkins">jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a></code> | jenkins block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.job">job</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a></code> | job block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.newRelic">newRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a></code> | new_relic block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a></code> | prometheus block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.web">web</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a></code> | web block. |

---

##### `cloudWatch`<sup>Optional</sup> <a name="cloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.cloudWatch"></a>

```typescript
public readonly cloudWatch: OceancdVerificationTemplateMetricsProviderCloudWatch;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a>

cloud_watch block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#cloud_watch OceancdVerificationTemplate#cloud_watch}

---

##### `datadog`<sup>Optional</sup> <a name="datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.datadog"></a>

```typescript
public readonly datadog: OceancdVerificationTemplateMetricsProviderDatadog;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a>

datadog block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#datadog OceancdVerificationTemplate#datadog}

---

##### `jenkins`<sup>Optional</sup> <a name="jenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.jenkins"></a>

```typescript
public readonly jenkins: OceancdVerificationTemplateMetricsProviderJenkins;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a>

jenkins block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#jenkins OceancdVerificationTemplate#jenkins}

---

##### `job`<sup>Optional</sup> <a name="job" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.job"></a>

```typescript
public readonly job: OceancdVerificationTemplateMetricsProviderJob;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a>

job block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#job OceancdVerificationTemplate#job}

---

##### `newRelic`<sup>Optional</sup> <a name="newRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.newRelic"></a>

```typescript
public readonly newRelic: OceancdVerificationTemplateMetricsProviderNewRelic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a>

new_relic block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#new_relic OceancdVerificationTemplate#new_relic}

---

##### `prometheus`<sup>Optional</sup> <a name="prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.prometheus"></a>

```typescript
public readonly prometheus: OceancdVerificationTemplateMetricsProviderPrometheus;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a>

prometheus block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#prometheus OceancdVerificationTemplate#prometheus}

---

##### `web`<sup>Optional</sup> <a name="web" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider.property.web"></a>

```typescript
public readonly web: OceancdVerificationTemplateMetricsProviderWeb;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a>

web block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#web OceancdVerificationTemplate#web}

---

### OceancdVerificationTemplateMetricsProviderCloudWatch <a name="OceancdVerificationTemplateMetricsProviderCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderCloudWatch: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.property.metricDataQueries">metricDataQueries</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>[]</code> | metric_data_queries block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}. |

---

##### `metricDataQueries`<sup>Required</sup> <a name="metricDataQueries" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.property.metricDataQueries"></a>

```typescript
public readonly metricDataQueries: IResolvable | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>[]

metric_data_queries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#metric_data_queries OceancdVerificationTemplate#metric_data_queries}

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}.

---

### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.expression">expression</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#expression OceancdVerificationTemplate#expression}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.label">label</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#label OceancdVerificationTemplate#label}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.metricStat">metricStat</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a></code> | metric_stat block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.period">period</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#period OceancdVerificationTemplate#period}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.returnData">returnData</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#return_data OceancdVerificationTemplate#return_data}. |

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#id OceancdVerificationTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#expression OceancdVerificationTemplate#expression}.

---

##### `label`<sup>Optional</sup> <a name="label" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#label OceancdVerificationTemplate#label}.

---

##### `metricStat`<sup>Optional</sup> <a name="metricStat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.metricStat"></a>

```typescript
public readonly metricStat: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a>

metric_stat block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#metric_stat OceancdVerificationTemplate#metric_stat}

---

##### `period`<sup>Optional</sup> <a name="period" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#period OceancdVerificationTemplate#period}.

---

##### `returnData`<sup>Optional</sup> <a name="returnData" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries.property.returnData"></a>

```typescript
public readonly returnData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#return_data OceancdVerificationTemplate#return_data}.

---

### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a></code> | metric block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.metricPeriod">metricPeriod</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#metric_period OceancdVerificationTemplate#metric_period}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.stat">stat</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#stat OceancdVerificationTemplate#stat}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.unit">unit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#unit OceancdVerificationTemplate#unit}. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.metric"></a>

```typescript
public readonly metric: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#metric OceancdVerificationTemplate#metric}

---

##### `metricPeriod`<sup>Optional</sup> <a name="metricPeriod" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.metricPeriod"></a>

```typescript
public readonly metricPeriod: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#metric_period OceancdVerificationTemplate#metric_period}.

---

##### `stat`<sup>Optional</sup> <a name="stat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.stat"></a>

```typescript
public readonly stat: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#stat OceancdVerificationTemplate#stat}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#unit OceancdVerificationTemplate#unit}.

---

### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.metricName">metricName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#metric_name OceancdVerificationTemplate#metric_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.dimensions">dimensions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>[]</code> | dimensions block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#namespace OceancdVerificationTemplate#namespace}. |

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#metric_name OceancdVerificationTemplate#metric_name}.

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.dimensions"></a>

```typescript
public readonly dimensions: IResolvable | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>[]

dimensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#dimensions OceancdVerificationTemplate#dimensions}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#namespace OceancdVerificationTemplate#namespace}.

---

### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.property.dimensionName">dimensionName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#dimension_name OceancdVerificationTemplate#dimension_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.property.dimensionValue">dimensionValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#dimension_value OceancdVerificationTemplate#dimension_value}. |

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#dimension_name OceancdVerificationTemplate#dimension_name}.

---

##### `dimensionValue`<sup>Required</sup> <a name="dimensionValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions.property.dimensionValue"></a>

```typescript
public readonly dimensionValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#dimension_value OceancdVerificationTemplate#dimension_value}.

---

### OceancdVerificationTemplateMetricsProviderDatadog <a name="OceancdVerificationTemplateMetricsProviderDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderDatadog: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.property.datadogQuery">datadogQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.property.duration">duration</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}. |

---

##### `datadogQuery`<sup>Optional</sup> <a name="datadogQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.property.datadogQuery"></a>

```typescript
public readonly datadogQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#datadog_query OceancdVerificationTemplate#datadog_query}.

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#duration OceancdVerificationTemplate#duration}.

---

### OceancdVerificationTemplateMetricsProviderJenkins <a name="OceancdVerificationTemplateMetricsProviderJenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderJenkins: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.jenkinsInterval">jenkinsInterval</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#jenkins_interval OceancdVerificationTemplate#jenkins_interval}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.pipelineName">pipelineName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#pipeline_name OceancdVerificationTemplate#pipeline_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.timeout">timeout</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#timeout OceancdVerificationTemplate#timeout}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.jenkinsParameters">jenkinsParameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a></code> | jenkins_parameters block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.tlsVerification">tlsVerification</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#tls_verification OceancdVerificationTemplate#tls_verification}. |

---

##### `jenkinsInterval`<sup>Required</sup> <a name="jenkinsInterval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.jenkinsInterval"></a>

```typescript
public readonly jenkinsInterval: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#jenkins_interval OceancdVerificationTemplate#jenkins_interval}.

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#pipeline_name OceancdVerificationTemplate#pipeline_name}.

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#timeout OceancdVerificationTemplate#timeout}.

---

##### `jenkinsParameters`<sup>Optional</sup> <a name="jenkinsParameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.jenkinsParameters"></a>

```typescript
public readonly jenkinsParameters: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a>

jenkins_parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#jenkins_parameters OceancdVerificationTemplate#jenkins_parameters}

---

##### `tlsVerification`<sup>Optional</sup> <a name="tlsVerification" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins.property.tlsVerification"></a>

```typescript
public readonly tlsVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#tls_verification OceancdVerificationTemplate#tls_verification}.

---

### OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters <a name="OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.property.parameterKey">parameterKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#parameter_key OceancdVerificationTemplate#parameter_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.property.parameterValue">parameterValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#parameter_value OceancdVerificationTemplate#parameter_value}. |

---

##### `parameterKey`<sup>Required</sup> <a name="parameterKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.property.parameterKey"></a>

```typescript
public readonly parameterKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#parameter_key OceancdVerificationTemplate#parameter_key}.

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#parameter_value OceancdVerificationTemplate#parameter_value}.

---

### OceancdVerificationTemplateMetricsProviderJob <a name="OceancdVerificationTemplateMetricsProviderJob" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderJob: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob.property.spec">spec</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>[]</code> | spec block. |

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob.property.spec"></a>

```typescript
public readonly spec: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>[]

spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#spec OceancdVerificationTemplate#spec}

---

### OceancdVerificationTemplateMetricsProviderJobSpec <a name="OceancdVerificationTemplateMetricsProviderJobSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderJobSpec: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.property.jobTemplate">jobTemplate</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>[]</code> | job_template block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.property.backoffLimit">backoffLimit</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#backoff_limit OceancdVerificationTemplate#backoff_limit}. |

---

##### `jobTemplate`<sup>Required</sup> <a name="jobTemplate" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.property.jobTemplate"></a>

```typescript
public readonly jobTemplate: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>[]

job_template block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#job_template OceancdVerificationTemplate#job_template}

---

##### `backoffLimit`<sup>Optional</sup> <a name="backoffLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec.property.backoffLimit"></a>

```typescript
public readonly backoffLimit: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#backoff_limit OceancdVerificationTemplate#backoff_limit}.

---

### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderJobSpecJobTemplate: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate.property.templateSpec">templateSpec</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>[]</code> | template_spec block. |

---

##### `templateSpec`<sup>Required</sup> <a name="templateSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate.property.templateSpec"></a>

```typescript
public readonly templateSpec: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>[]

template_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#template_spec OceancdVerificationTemplate#template_spec}

---

### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.property.containers">containers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>[]</code> | containers block. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.property.restartPolicy">restartPolicy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#restart_policy OceancdVerificationTemplate#restart_policy}. |

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.property.containers"></a>

```typescript
public readonly containers: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>[]

containers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#containers OceancdVerificationTemplate#containers}

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#restart_policy OceancdVerificationTemplate#restart_policy}.

---

### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.command">command</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#command OceancdVerificationTemplate#command}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.containerName">containerName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#container_name OceancdVerificationTemplate#container_name}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.image">image</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#image OceancdVerificationTemplate#image}. |

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#command OceancdVerificationTemplate#command}.

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#container_name OceancdVerificationTemplate#container_name}.

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#image OceancdVerificationTemplate#image}.

---

### OceancdVerificationTemplateMetricsProviderNewRelic <a name="OceancdVerificationTemplateMetricsProviderNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderNewRelic: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.property.newRelicQuery">newRelicQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.property.profile">profile</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}. |

---

##### `newRelicQuery`<sup>Required</sup> <a name="newRelicQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.property.newRelicQuery"></a>

```typescript
public readonly newRelicQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#new_relic_query OceancdVerificationTemplate#new_relic_query}.

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#profile OceancdVerificationTemplate#profile}.

---

### OceancdVerificationTemplateMetricsProviderPrometheus <a name="OceancdVerificationTemplateMetricsProviderPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderPrometheus: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus.property.prometheusQuery">prometheusQuery</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}. |

---

##### `prometheusQuery`<sup>Required</sup> <a name="prometheusQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus.property.prometheusQuery"></a>

```typescript
public readonly prometheusQuery: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#prometheus_query OceancdVerificationTemplate#prometheus_query}.

---

### OceancdVerificationTemplateMetricsProviderWeb <a name="OceancdVerificationTemplateMetricsProviderWeb" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderWeb: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#url OceancdVerificationTemplate#url}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.body">body</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#body OceancdVerificationTemplate#body}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#insecure OceancdVerificationTemplate#insecure}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.jsonPath">jsonPath</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#json_path OceancdVerificationTemplate#json_path}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.method">method</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#method OceancdVerificationTemplate#method}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#timeout_seconds OceancdVerificationTemplate#timeout_seconds}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.webHeader">webHeader</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>[]</code> | web_header block. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#url OceancdVerificationTemplate#url}.

---

##### `body`<sup>Optional</sup> <a name="body" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#body OceancdVerificationTemplate#body}.

---

##### `insecure`<sup>Optional</sup> <a name="insecure" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#insecure OceancdVerificationTemplate#insecure}.

---

##### `jsonPath`<sup>Optional</sup> <a name="jsonPath" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#json_path OceancdVerificationTemplate#json_path}.

---

##### `method`<sup>Optional</sup> <a name="method" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#method OceancdVerificationTemplate#method}.

---

##### `timeoutSeconds`<sup>Optional</sup> <a name="timeoutSeconds" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#timeout_seconds OceancdVerificationTemplate#timeout_seconds}.

---

##### `webHeader`<sup>Optional</sup> <a name="webHeader" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb.property.webHeader"></a>

```typescript
public readonly webHeader: IResolvable | OceancdVerificationTemplateMetricsProviderWebWebHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>[]

web_header block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#web_header OceancdVerificationTemplate#web_header}

---

### OceancdVerificationTemplateMetricsProviderWebWebHeader <a name="OceancdVerificationTemplateMetricsProviderWebWebHeader" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

const oceancdVerificationTemplateMetricsProviderWebWebHeader: oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.property.webHeaderKey">webHeaderKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#web_header_key OceancdVerificationTemplate#web_header_key}. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.property.webHeaderValue">webHeaderValue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#web_header_value OceancdVerificationTemplate#web_header_value}. |

---

##### `webHeaderKey`<sup>Required</sup> <a name="webHeaderKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.property.webHeaderKey"></a>

```typescript
public readonly webHeaderKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#web_header_key OceancdVerificationTemplate#web_header_key}.

---

##### `webHeaderValue`<sup>Required</sup> <a name="webHeaderValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader.property.webHeaderValue"></a>

```typescript
public readonly webHeaderValue: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.212.0/docs/resources/oceancd_verification_template#web_header_value OceancdVerificationTemplate#web_header_value}.

---

## Classes <a name="Classes" id="Classes"></a>

### OceancdVerificationTemplateArgsList <a name="OceancdVerificationTemplateArgsList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateArgsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.get"></a>

```typescript
public get(index: number): OceancdVerificationTemplateArgsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateArgs[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>[]

---


### OceancdVerificationTemplateArgsOutputReference <a name="OceancdVerificationTemplateArgsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.putValueFrom">putValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resetValueFrom">resetValueFrom</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putValueFrom` <a name="putValueFrom" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.putValueFrom"></a>

```typescript
public putValueFrom(value: OceancdVerificationTemplateArgsValueFrom): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.putValueFrom.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a>

---

##### `resetValue` <a name="resetValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```

##### `resetValueFrom` <a name="resetValueFrom" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.resetValueFrom"></a>

```typescript
public resetValueFrom(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueFrom">valueFrom</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference">OceancdVerificationTemplateArgsValueFromOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.argNameInput">argNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueFromInput">valueFromInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.argName">argName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `valueFrom`<sup>Required</sup> <a name="valueFrom" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueFrom"></a>

```typescript
public readonly valueFrom: OceancdVerificationTemplateArgsValueFromOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference">OceancdVerificationTemplateArgsValueFromOutputReference</a>

---

##### `argNameInput`<sup>Optional</sup> <a name="argNameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.argNameInput"></a>

```typescript
public readonly argNameInput: string;
```

- *Type:* string

---

##### `valueFromInput`<sup>Optional</sup> <a name="valueFromInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueFromInput"></a>

```typescript
public readonly valueFromInput: OceancdVerificationTemplateArgsValueFrom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `argName`<sup>Required</sup> <a name="argName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.argName"></a>

```typescript
public readonly argName: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateArgs;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgs">OceancdVerificationTemplateArgs</a>

---


### OceancdVerificationTemplateArgsValueFromOutputReference <a name="OceancdVerificationTemplateArgsValueFromOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.putSecretKeyRef">putSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resetSecretKeyRef">resetSecretKeyRef</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSecretKeyRef` <a name="putSecretKeyRef" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.putSecretKeyRef"></a>

```typescript
public putSecretKeyRef(value: OceancdVerificationTemplateArgsValueFromSecretKeyRef): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.putSecretKeyRef.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a>

---

##### `resetSecretKeyRef` <a name="resetSecretKeyRef" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.resetSecretKeyRef"></a>

```typescript
public resetSecretKeyRef(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.secretKeyRef">secretKeyRef</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference">OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.secretKeyRefInput">secretKeyRefInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `secretKeyRef`<sup>Required</sup> <a name="secretKeyRef" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.secretKeyRef"></a>

```typescript
public readonly secretKeyRef: OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference">OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference</a>

---

##### `secretKeyRefInput`<sup>Optional</sup> <a name="secretKeyRefInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.secretKeyRefInput"></a>

```typescript
public readonly secretKeyRefInput: OceancdVerificationTemplateArgsValueFromSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateArgsValueFrom;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFrom">OceancdVerificationTemplateArgsValueFrom</a>

---


### OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference <a name="OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRefOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateArgsValueFromSecretKeyRef;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateArgsValueFromSecretKeyRef">OceancdVerificationTemplateArgsValueFromSecretKeyRef</a>

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.datadogQueryInput">datadogQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.datadogQuery">datadogQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datadogQueryInput`<sup>Optional</sup> <a name="datadogQueryInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.datadogQueryInput"></a>

```typescript
public readonly datadogQueryInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `datadogQuery`<sup>Required</sup> <a name="datadogQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.datadogQuery"></a>

```typescript
public readonly datadogQuery: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a>

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderList <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.get"></a>

```typescript
public get(index: number): OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsBaselineBaselineProvider[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>[]

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resetProfile">resetProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.resetProfile"></a>

```typescript
public resetProfile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.newRelicQueryInput">newRelicQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.newRelicQuery">newRelicQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `newRelicQueryInput`<sup>Optional</sup> <a name="newRelicQueryInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.newRelicQueryInput"></a>

```typescript
public readonly newRelicQueryInput: string;
```

- *Type:* string

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `newRelicQuery`<sup>Required</sup> <a name="newRelicQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.newRelicQuery"></a>

```typescript
public readonly newRelicQuery: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a>

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putDatadog">putDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putNewRelic">putNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putPrometheus">putPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetDatadog">resetDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetNewRelic">resetNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetPrometheus">resetPrometheus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatadog` <a name="putDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putDatadog"></a>

```typescript
public putDatadog(value: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a>

---

##### `putNewRelic` <a name="putNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putNewRelic"></a>

```typescript
public putNewRelic(value: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a>

---

##### `putPrometheus` <a name="putPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putPrometheus"></a>

```typescript
public putPrometheus(value: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.putPrometheus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a>

---

##### `resetDatadog` <a name="resetDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetDatadog"></a>

```typescript
public resetDatadog(): void
```

##### `resetNewRelic` <a name="resetNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetNewRelic"></a>

```typescript
public resetNewRelic(): void
```

##### `resetPrometheus` <a name="resetPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.resetPrometheus"></a>

```typescript
public resetPrometheus(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.newRelic">newRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.datadogInput">datadogInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.newRelicInput">newRelicInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.prometheusInput">prometheusInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datadog`<sup>Required</sup> <a name="datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.datadog"></a>

```typescript
public readonly datadog: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadogOutputReference</a>

---

##### `newRelic`<sup>Required</sup> <a name="newRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.newRelic"></a>

```typescript
public readonly newRelic: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelicOutputReference</a>

---

##### `prometheus`<sup>Required</sup> <a name="prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.prometheus"></a>

```typescript
public readonly prometheus: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference</a>

---

##### `datadogInput`<sup>Optional</sup> <a name="datadogInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.datadogInput"></a>

```typescript
public readonly datadogInput: OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog">OceancdVerificationTemplateMetricsBaselineBaselineProviderDatadog</a>

---

##### `newRelicInput`<sup>Optional</sup> <a name="newRelicInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.newRelicInput"></a>

```typescript
public readonly newRelicInput: OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic">OceancdVerificationTemplateMetricsBaselineBaselineProviderNewRelic</a>

---

##### `prometheusInput`<sup>Optional</sup> <a name="prometheusInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.prometheusInput"></a>

```typescript
public readonly prometheusInput: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsBaselineBaselineProvider;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>

---


### OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference <a name="OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.prometheusQueryInput">prometheusQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.prometheusQuery">prometheusQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prometheusQueryInput`<sup>Optional</sup> <a name="prometheusQueryInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.prometheusQueryInput"></a>

```typescript
public readonly prometheusQueryInput: string;
```

- *Type:* string

---

##### `prometheusQuery`<sup>Required</sup> <a name="prometheusQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.prometheusQuery"></a>

```typescript
public readonly prometheusQuery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus">OceancdVerificationTemplateMetricsBaselineBaselineProviderPrometheus</a>

---


### OceancdVerificationTemplateMetricsBaselineOutputReference <a name="OceancdVerificationTemplateMetricsBaselineOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.putBaselineProvider">putBaselineProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resetMaxRange">resetMaxRange</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resetMinRange">resetMinRange</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaselineProvider` <a name="putBaselineProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.putBaselineProvider"></a>

```typescript
public putBaselineProvider(value: IResolvable | OceancdVerificationTemplateMetricsBaselineBaselineProvider[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.putBaselineProvider.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>[]

---

##### `resetMaxRange` <a name="resetMaxRange" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resetMaxRange"></a>

```typescript
public resetMaxRange(): void
```

##### `resetMinRange` <a name="resetMinRange" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.resetMinRange"></a>

```typescript
public resetMinRange(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.baselineProvider">baselineProvider</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList">OceancdVerificationTemplateMetricsBaselineBaselineProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.baselineProviderInput">baselineProviderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.maxRangeInput">maxRangeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.minRangeInput">minRangeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.maxRange">maxRange</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.minRange">minRange</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.threshold">threshold</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baselineProvider`<sup>Required</sup> <a name="baselineProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.baselineProvider"></a>

```typescript
public readonly baselineProvider: OceancdVerificationTemplateMetricsBaselineBaselineProviderList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProviderList">OceancdVerificationTemplateMetricsBaselineBaselineProviderList</a>

---

##### `baselineProviderInput`<sup>Optional</sup> <a name="baselineProviderInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.baselineProviderInput"></a>

```typescript
public readonly baselineProviderInput: IResolvable | OceancdVerificationTemplateMetricsBaselineBaselineProvider[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineBaselineProvider">OceancdVerificationTemplateMetricsBaselineBaselineProvider</a>[]

---

##### `maxRangeInput`<sup>Optional</sup> <a name="maxRangeInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.maxRangeInput"></a>

```typescript
public readonly maxRangeInput: number;
```

- *Type:* number

---

##### `minRangeInput`<sup>Optional</sup> <a name="minRangeInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.minRangeInput"></a>

```typescript
public readonly minRangeInput: number;
```

- *Type:* number

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.thresholdInput"></a>

```typescript
public readonly thresholdInput: string;
```

- *Type:* string

---

##### `maxRange`<sup>Required</sup> <a name="maxRange" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.maxRange"></a>

```typescript
public readonly maxRange: number;
```

- *Type:* number

---

##### `minRange`<sup>Required</sup> <a name="minRange" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.minRange"></a>

```typescript
public readonly minRange: number;
```

- *Type:* number

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.threshold"></a>

```typescript
public readonly threshold: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsBaseline;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a>

---


### OceancdVerificationTemplateMetricsList <a name="OceancdVerificationTemplateMetricsList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.get"></a>

```typescript
public get(index: number): OceancdVerificationTemplateMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetrics[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>[]

---


### OceancdVerificationTemplateMetricsOutputReference <a name="OceancdVerificationTemplateMetricsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putBaseline">putBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putProvider">putProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetBaseline">resetBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetConsecutiveErrorLimit">resetConsecutiveErrorLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetCount">resetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetDryRun">resetDryRun</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetFailureCondition">resetFailureCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetFailureLimit">resetFailureLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetInitialDelay">resetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetInterval">resetInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetSuccessCondition">resetSuccessCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBaseline` <a name="putBaseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putBaseline"></a>

```typescript
public putBaseline(value: OceancdVerificationTemplateMetricsBaseline): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putBaseline.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a>

---

##### `putProvider` <a name="putProvider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putProvider"></a>

```typescript
public putProvider(value: IResolvable | OceancdVerificationTemplateMetricsProvider[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.putProvider.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>[]

---

##### `resetBaseline` <a name="resetBaseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetBaseline"></a>

```typescript
public resetBaseline(): void
```

##### `resetConsecutiveErrorLimit` <a name="resetConsecutiveErrorLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetConsecutiveErrorLimit"></a>

```typescript
public resetConsecutiveErrorLimit(): void
```

##### `resetCount` <a name="resetCount" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetCount"></a>

```typescript
public resetCount(): void
```

##### `resetDryRun` <a name="resetDryRun" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetDryRun"></a>

```typescript
public resetDryRun(): void
```

##### `resetFailureCondition` <a name="resetFailureCondition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetFailureCondition"></a>

```typescript
public resetFailureCondition(): void
```

##### `resetFailureLimit` <a name="resetFailureLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetFailureLimit"></a>

```typescript
public resetFailureLimit(): void
```

##### `resetInitialDelay` <a name="resetInitialDelay" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetInitialDelay"></a>

```typescript
public resetInitialDelay(): void
```

##### `resetInterval` <a name="resetInterval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetInterval"></a>

```typescript
public resetInterval(): void
```

##### `resetSuccessCondition` <a name="resetSuccessCondition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.resetSuccessCondition"></a>

```typescript
public resetSuccessCondition(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.baseline">baseline</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference">OceancdVerificationTemplateMetricsBaselineOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.provider">provider</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList">OceancdVerificationTemplateMetricsProviderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.baselineInput">baselineInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.consecutiveErrorLimitInput">consecutiveErrorLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.countInput">countInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.dryRunInput">dryRunInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureConditionInput">failureConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureLimitInput">failureLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.initialDelayInput">initialDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.intervalInput">intervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.metricsNameInput">metricsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.providerInput">providerInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.successConditionInput">successConditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.consecutiveErrorLimit">consecutiveErrorLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.dryRun">dryRun</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureCondition">failureCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureLimit">failureLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.initialDelay">initialDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.interval">interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.metricsName">metricsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.successCondition">successCondition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseline`<sup>Required</sup> <a name="baseline" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.baseline"></a>

```typescript
public readonly baseline: OceancdVerificationTemplateMetricsBaselineOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaselineOutputReference">OceancdVerificationTemplateMetricsBaselineOutputReference</a>

---

##### `provider`<sup>Required</sup> <a name="provider" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.provider"></a>

```typescript
public readonly provider: OceancdVerificationTemplateMetricsProviderList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList">OceancdVerificationTemplateMetricsProviderList</a>

---

##### `baselineInput`<sup>Optional</sup> <a name="baselineInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.baselineInput"></a>

```typescript
public readonly baselineInput: OceancdVerificationTemplateMetricsBaseline;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsBaseline">OceancdVerificationTemplateMetricsBaseline</a>

---

##### `consecutiveErrorLimitInput`<sup>Optional</sup> <a name="consecutiveErrorLimitInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.consecutiveErrorLimitInput"></a>

```typescript
public readonly consecutiveErrorLimitInput: number;
```

- *Type:* number

---

##### `countInput`<sup>Optional</sup> <a name="countInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.countInput"></a>

```typescript
public readonly countInput: number;
```

- *Type:* number

---

##### `dryRunInput`<sup>Optional</sup> <a name="dryRunInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.dryRunInput"></a>

```typescript
public readonly dryRunInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failureConditionInput`<sup>Optional</sup> <a name="failureConditionInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureConditionInput"></a>

```typescript
public readonly failureConditionInput: string;
```

- *Type:* string

---

##### `failureLimitInput`<sup>Optional</sup> <a name="failureLimitInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureLimitInput"></a>

```typescript
public readonly failureLimitInput: number;
```

- *Type:* number

---

##### `initialDelayInput`<sup>Optional</sup> <a name="initialDelayInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.initialDelayInput"></a>

```typescript
public readonly initialDelayInput: string;
```

- *Type:* string

---

##### `intervalInput`<sup>Optional</sup> <a name="intervalInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.intervalInput"></a>

```typescript
public readonly intervalInput: string;
```

- *Type:* string

---

##### `metricsNameInput`<sup>Optional</sup> <a name="metricsNameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.metricsNameInput"></a>

```typescript
public readonly metricsNameInput: string;
```

- *Type:* string

---

##### `providerInput`<sup>Optional</sup> <a name="providerInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.providerInput"></a>

```typescript
public readonly providerInput: IResolvable | OceancdVerificationTemplateMetricsProvider[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>[]

---

##### `successConditionInput`<sup>Optional</sup> <a name="successConditionInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.successConditionInput"></a>

```typescript
public readonly successConditionInput: string;
```

- *Type:* string

---

##### `consecutiveErrorLimit`<sup>Required</sup> <a name="consecutiveErrorLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.consecutiveErrorLimit"></a>

```typescript
public readonly consecutiveErrorLimit: number;
```

- *Type:* number

---

##### `count`<sup>Required</sup> <a name="count" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dryRun`<sup>Required</sup> <a name="dryRun" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.dryRun"></a>

```typescript
public readonly dryRun: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `failureCondition`<sup>Required</sup> <a name="failureCondition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureCondition"></a>

```typescript
public readonly failureCondition: string;
```

- *Type:* string

---

##### `failureLimit`<sup>Required</sup> <a name="failureLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.failureLimit"></a>

```typescript
public readonly failureLimit: number;
```

- *Type:* number

---

##### `initialDelay`<sup>Required</sup> <a name="initialDelay" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.initialDelay"></a>

```typescript
public readonly initialDelay: string;
```

- *Type:* string

---

##### `interval`<sup>Required</sup> <a name="interval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.interval"></a>

```typescript
public readonly interval: string;
```

- *Type:* string

---

##### `metricsName`<sup>Required</sup> <a name="metricsName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.metricsName"></a>

```typescript
public readonly metricsName: string;
```

- *Type:* string

---

##### `successCondition`<sup>Required</sup> <a name="successCondition" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.successCondition"></a>

```typescript
public readonly successCondition: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetrics;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetrics">OceancdVerificationTemplateMetrics</a>

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.get"></a>

```typescript
public get(index: number): OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>[]

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.get"></a>

```typescript
public get(index: number): OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>[]

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionNameInput">dimensionNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionValueInput">dimensionValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionName">dimensionName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionValue">dimensionValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensionNameInput`<sup>Optional</sup> <a name="dimensionNameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionNameInput"></a>

```typescript
public readonly dimensionNameInput: string;
```

- *Type:* string

---

##### `dimensionValueInput`<sup>Optional</sup> <a name="dimensionValueInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionValueInput"></a>

```typescript
public readonly dimensionValueInput: string;
```

- *Type:* string

---

##### `dimensionName`<sup>Required</sup> <a name="dimensionName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionName"></a>

```typescript
public readonly dimensionName: string;
```

- *Type:* string

---

##### `dimensionValue`<sup>Required</sup> <a name="dimensionValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.dimensionValue"></a>

```typescript
public readonly dimensionValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.putDimensions">putDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resetDimensions">resetDimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDimensions` <a name="putDimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.putDimensions"></a>

```typescript
public putDimensions(value: IResolvable | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.putDimensions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>[]

---

##### `resetDimensions` <a name="resetDimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resetDimensions"></a>

```typescript
public resetDimensions(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.resetNamespace"></a>

```typescript
public resetNamespace(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.dimensions">dimensions</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.dimensionsInput">dimensionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.metricNameInput">metricNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.metricName">metricName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.dimensions"></a>

```typescript
public readonly dimensions: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensionsList</a>

---

##### `dimensionsInput`<sup>Optional</sup> <a name="dimensionsInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.dimensionsInput"></a>

```typescript
public readonly dimensionsInput: IResolvable | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricDimensions</a>[]

---

##### `metricNameInput`<sup>Optional</sup> <a name="metricNameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.metricNameInput"></a>

```typescript
public readonly metricNameInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `metricName`<sup>Required</sup> <a name="metricName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.metricName"></a>

```typescript
public readonly metricName: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a>

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.putMetric">putMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetMetricPeriod">resetMetricPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetStat">resetStat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetric` <a name="putMetric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.putMetric"></a>

```typescript
public putMetric(value: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a>

---

##### `resetMetric` <a name="resetMetric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetMetric"></a>

```typescript
public resetMetric(): void
```

##### `resetMetricPeriod` <a name="resetMetricPeriod" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetMetricPeriod"></a>

```typescript
public resetMetricPeriod(): void
```

##### `resetStat` <a name="resetStat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetStat"></a>

```typescript
public resetStat(): void
```

##### `resetUnit` <a name="resetUnit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.resetUnit"></a>

```typescript
public resetUnit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metric">metric</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricInput">metricInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricPeriodInput">metricPeriodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.statInput">statInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.unitInput">unitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricPeriod">metricPeriod</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.stat">stat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.unit">unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metric"></a>

```typescript
public readonly metric: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetricOutputReference</a>

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricInput"></a>

```typescript
public readonly metricInput: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatMetric</a>

---

##### `metricPeriodInput`<sup>Optional</sup> <a name="metricPeriodInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricPeriodInput"></a>

```typescript
public readonly metricPeriodInput: number;
```

- *Type:* number

---

##### `statInput`<sup>Optional</sup> <a name="statInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.statInput"></a>

```typescript
public readonly statInput: string;
```

- *Type:* string

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.unitInput"></a>

```typescript
public readonly unitInput: string;
```

- *Type:* string

---

##### `metricPeriod`<sup>Required</sup> <a name="metricPeriod" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.metricPeriod"></a>

```typescript
public readonly metricPeriod: number;
```

- *Type:* number

---

##### `stat`<sup>Required</sup> <a name="stat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.stat"></a>

```typescript
public readonly stat: string;
```

- *Type:* string

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.unit"></a>

```typescript
public readonly unit: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a>

---


### OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.putMetricStat">putMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetLabel">resetLabel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetMetricStat">resetMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetPeriod">resetPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetReturnData">resetReturnData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricStat` <a name="putMetricStat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.putMetricStat"></a>

```typescript
public putMetricStat(value: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.putMetricStat.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a>

---

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetLabel` <a name="resetLabel" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetLabel"></a>

```typescript
public resetLabel(): void
```

##### `resetMetricStat` <a name="resetMetricStat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetMetricStat"></a>

```typescript
public resetMetricStat(): void
```

##### `resetPeriod` <a name="resetPeriod" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetPeriod"></a>

```typescript
public resetPeriod(): void
```

##### `resetReturnData` <a name="resetReturnData" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.resetReturnData"></a>

```typescript
public resetReturnData(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.metricStat">metricStat</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.labelInput">labelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.metricStatInput">metricStatInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.periodInput">periodInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.returnDataInput">returnDataInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.label">label</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.period">period</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.returnData">returnData</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricStat`<sup>Required</sup> <a name="metricStat" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.metricStat"></a>

```typescript
public readonly metricStat: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStatOutputReference</a>

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.labelInput"></a>

```typescript
public readonly labelInput: string;
```

- *Type:* string

---

##### `metricStatInput`<sup>Optional</sup> <a name="metricStatInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.metricStatInput"></a>

```typescript
public readonly metricStatInput: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesMetricStat</a>

---

##### `periodInput`<sup>Optional</sup> <a name="periodInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.periodInput"></a>

```typescript
public readonly periodInput: number;
```

- *Type:* number

---

##### `returnDataInput`<sup>Optional</sup> <a name="returnDataInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.returnDataInput"></a>

```typescript
public readonly returnDataInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.label"></a>

```typescript
public readonly label: string;
```

- *Type:* string

---

##### `period`<sup>Required</sup> <a name="period" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.period"></a>

```typescript
public readonly period: number;
```

- *Type:* number

---

##### `returnData`<sup>Required</sup> <a name="returnData" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.returnData"></a>

```typescript
public readonly returnData: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>

---


### OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference <a name="OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.putMetricDataQueries">putMetricDataQueries</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMetricDataQueries` <a name="putMetricDataQueries" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.putMetricDataQueries"></a>

```typescript
public putMetricDataQueries(value: IResolvable | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.putMetricDataQueries.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>[]

---

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.metricDataQueries">metricDataQueries</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.metricDataQueriesInput">metricDataQueriesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricDataQueries`<sup>Required</sup> <a name="metricDataQueries" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.metricDataQueries"></a>

```typescript
public readonly metricDataQueries: OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueriesList</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `metricDataQueriesInput`<sup>Optional</sup> <a name="metricDataQueriesInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.metricDataQueriesInput"></a>

```typescript
public readonly metricDataQueriesInput: IResolvable | OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries">OceancdVerificationTemplateMetricsProviderCloudWatchMetricDataQueries</a>[]

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsProviderCloudWatch;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a>

---


### OceancdVerificationTemplateMetricsProviderDatadogOutputReference <a name="OceancdVerificationTemplateMetricsProviderDatadogOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resetDatadogQuery">resetDatadogQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resetDuration">resetDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatadogQuery` <a name="resetDatadogQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resetDatadogQuery"></a>

```typescript
public resetDatadogQuery(): void
```

##### `resetDuration` <a name="resetDuration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.resetDuration"></a>

```typescript
public resetDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.datadogQueryInput">datadogQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.durationInput">durationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.datadogQuery">datadogQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.duration">duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `datadogQueryInput`<sup>Optional</sup> <a name="datadogQueryInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.datadogQueryInput"></a>

```typescript
public readonly datadogQueryInput: string;
```

- *Type:* string

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.durationInput"></a>

```typescript
public readonly durationInput: string;
```

- *Type:* string

---

##### `datadogQuery`<sup>Required</sup> <a name="datadogQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.datadogQuery"></a>

```typescript
public readonly datadogQuery: string;
```

- *Type:* string

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.duration"></a>

```typescript
public readonly duration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsProviderDatadog;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a>

---


### OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference <a name="OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterKeyInput">parameterKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterValueInput">parameterValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterKey">parameterKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterValue">parameterValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterKeyInput`<sup>Optional</sup> <a name="parameterKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterKeyInput"></a>

```typescript
public readonly parameterKeyInput: string;
```

- *Type:* string

---

##### `parameterValueInput`<sup>Optional</sup> <a name="parameterValueInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterValueInput"></a>

```typescript
public readonly parameterValueInput: string;
```

- *Type:* string

---

##### `parameterKey`<sup>Required</sup> <a name="parameterKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterKey"></a>

```typescript
public readonly parameterKey: string;
```

- *Type:* string

---

##### `parameterValue`<sup>Required</sup> <a name="parameterValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.parameterValue"></a>

```typescript
public readonly parameterValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a>

---


### OceancdVerificationTemplateMetricsProviderJenkinsOutputReference <a name="OceancdVerificationTemplateMetricsProviderJenkinsOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.putJenkinsParameters">putJenkinsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resetJenkinsParameters">resetJenkinsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resetTlsVerification">resetTlsVerification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJenkinsParameters` <a name="putJenkinsParameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.putJenkinsParameters"></a>

```typescript
public putJenkinsParameters(value: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.putJenkinsParameters.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a>

---

##### `resetJenkinsParameters` <a name="resetJenkinsParameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resetJenkinsParameters"></a>

```typescript
public resetJenkinsParameters(): void
```

##### `resetTlsVerification` <a name="resetTlsVerification" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.resetTlsVerification"></a>

```typescript
public resetTlsVerification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsParameters">jenkinsParameters</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsIntervalInput">jenkinsIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsParametersInput">jenkinsParametersInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.pipelineNameInput">pipelineNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.tlsVerificationInput">tlsVerificationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsInterval">jenkinsInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.pipelineName">pipelineName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.tlsVerification">tlsVerification</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jenkinsParameters`<sup>Required</sup> <a name="jenkinsParameters" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsParameters"></a>

```typescript
public readonly jenkinsParameters: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParametersOutputReference</a>

---

##### `jenkinsIntervalInput`<sup>Optional</sup> <a name="jenkinsIntervalInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsIntervalInput"></a>

```typescript
public readonly jenkinsIntervalInput: string;
```

- *Type:* string

---

##### `jenkinsParametersInput`<sup>Optional</sup> <a name="jenkinsParametersInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsParametersInput"></a>

```typescript
public readonly jenkinsParametersInput: OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters">OceancdVerificationTemplateMetricsProviderJenkinsJenkinsParameters</a>

---

##### `pipelineNameInput`<sup>Optional</sup> <a name="pipelineNameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.pipelineNameInput"></a>

```typescript
public readonly pipelineNameInput: string;
```

- *Type:* string

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `tlsVerificationInput`<sup>Optional</sup> <a name="tlsVerificationInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.tlsVerificationInput"></a>

```typescript
public readonly tlsVerificationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jenkinsInterval`<sup>Required</sup> <a name="jenkinsInterval" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.jenkinsInterval"></a>

```typescript
public readonly jenkinsInterval: string;
```

- *Type:* string

---

##### `pipelineName`<sup>Required</sup> <a name="pipelineName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.pipelineName"></a>

```typescript
public readonly pipelineName: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `tlsVerification`<sup>Required</sup> <a name="tlsVerification" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.tlsVerification"></a>

```typescript
public readonly tlsVerification: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsProviderJenkins;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a>

---


### OceancdVerificationTemplateMetricsProviderJobOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.putSpec">putSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpec` <a name="putSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.putSpec"></a>

```typescript
public putSpec(value: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpec[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.putSpec.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.spec">spec</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList">OceancdVerificationTemplateMetricsProviderJobSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.specInput">specInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `spec`<sup>Required</sup> <a name="spec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.spec"></a>

```typescript
public readonly spec: OceancdVerificationTemplateMetricsProviderJobSpecList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList">OceancdVerificationTemplateMetricsProviderJobSpecList</a>

---

##### `specInput`<sup>Optional</sup> <a name="specInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.specInput"></a>

```typescript
public readonly specInput: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsProviderJob;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a>

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.get"></a>

```typescript
public get(index: number): OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>[]

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.putTemplateSpec">putTemplateSpec</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTemplateSpec` <a name="putTemplateSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.putTemplateSpec"></a>

```typescript
public putTemplateSpec(value: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.putTemplateSpec.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.templateSpec">templateSpec</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.templateSpecInput">templateSpecInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `templateSpec`<sup>Required</sup> <a name="templateSpec" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.templateSpec"></a>

```typescript
public readonly templateSpec: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList</a>

---

##### `templateSpecInput`<sup>Optional</sup> <a name="templateSpecInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.templateSpecInput"></a>

```typescript
public readonly templateSpecInput: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.get"></a>

```typescript
public get(index: number): OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>[]

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.commandInput">commandInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.containerNameInput">containerNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.command">command</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.containerName">containerName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `commandInput`<sup>Optional</sup> <a name="commandInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.commandInput"></a>

```typescript
public readonly commandInput: string[];
```

- *Type:* string[]

---

##### `containerNameInput`<sup>Optional</sup> <a name="containerNameInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.containerNameInput"></a>

```typescript
public readonly containerNameInput: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `command`<sup>Required</sup> <a name="command" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.command"></a>

```typescript
public readonly command: string[];
```

- *Type:* string[]

---

##### `containerName`<sup>Required</sup> <a name="containerName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.containerName"></a>

```typescript
public readonly containerName: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.get"></a>

```typescript
public get(index: number): OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>[]

---


### OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.putContainers">putContainers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContainers` <a name="putContainers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.putContainers"></a>

```typescript
public putContainers(value: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.putContainers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.containers">containers</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.containersInput">containersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.restartPolicyInput">restartPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.restartPolicy">restartPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `containers`<sup>Required</sup> <a name="containers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.containers"></a>

```typescript
public readonly containers: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainersList</a>

---

##### `containersInput`<sup>Optional</sup> <a name="containersInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.containersInput"></a>

```typescript
public readonly containersInput: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecContainers</a>[]

---

##### `restartPolicyInput`<sup>Optional</sup> <a name="restartPolicyInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.restartPolicyInput"></a>

```typescript
public readonly restartPolicyInput: string;
```

- *Type:* string

---

##### `restartPolicy`<sup>Required</sup> <a name="restartPolicy" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.restartPolicy"></a>

```typescript
public readonly restartPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateTemplateSpec</a>

---


### OceancdVerificationTemplateMetricsProviderJobSpecList <a name="OceancdVerificationTemplateMetricsProviderJobSpecList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.get"></a>

```typescript
public get(index: number): OceancdVerificationTemplateMetricsProviderJobSpecOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpec[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>[]

---


### OceancdVerificationTemplateMetricsProviderJobSpecOutputReference <a name="OceancdVerificationTemplateMetricsProviderJobSpecOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.putJobTemplate">putJobTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resetBackoffLimit">resetBackoffLimit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putJobTemplate` <a name="putJobTemplate" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.putJobTemplate"></a>

```typescript
public putJobTemplate(value: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.putJobTemplate.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>[]

---

##### `resetBackoffLimit` <a name="resetBackoffLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.resetBackoffLimit"></a>

```typescript
public resetBackoffLimit(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.jobTemplate">jobTemplate</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.backoffLimitInput">backoffLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.jobTemplateInput">jobTemplateInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.backoffLimit">backoffLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `jobTemplate`<sup>Required</sup> <a name="jobTemplate" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.jobTemplate"></a>

```typescript
public readonly jobTemplate: OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplateList</a>

---

##### `backoffLimitInput`<sup>Optional</sup> <a name="backoffLimitInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.backoffLimitInput"></a>

```typescript
public readonly backoffLimitInput: number;
```

- *Type:* number

---

##### `jobTemplateInput`<sup>Optional</sup> <a name="jobTemplateInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.jobTemplateInput"></a>

```typescript
public readonly jobTemplateInput: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate">OceancdVerificationTemplateMetricsProviderJobSpecJobTemplate</a>[]

---

##### `backoffLimit`<sup>Required</sup> <a name="backoffLimit" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.backoffLimit"></a>

```typescript
public readonly backoffLimit: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpecOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderJobSpec;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobSpec">OceancdVerificationTemplateMetricsProviderJobSpec</a>

---


### OceancdVerificationTemplateMetricsProviderList <a name="OceancdVerificationTemplateMetricsProviderList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.get"></a>

```typescript
public get(index: number): OceancdVerificationTemplateMetricsProviderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProvider[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>[]

---


### OceancdVerificationTemplateMetricsProviderNewRelicOutputReference <a name="OceancdVerificationTemplateMetricsProviderNewRelicOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resetProfile">resetProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.resetProfile"></a>

```typescript
public resetProfile(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.newRelicQueryInput">newRelicQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.newRelicQuery">newRelicQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `newRelicQueryInput`<sup>Optional</sup> <a name="newRelicQueryInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.newRelicQueryInput"></a>

```typescript
public readonly newRelicQueryInput: string;
```

- *Type:* string

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `newRelicQuery`<sup>Required</sup> <a name="newRelicQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.newRelicQuery"></a>

```typescript
public readonly newRelicQuery: string;
```

- *Type:* string

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsProviderNewRelic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a>

---


### OceancdVerificationTemplateMetricsProviderOutputReference <a name="OceancdVerificationTemplateMetricsProviderOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putCloudWatch">putCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putDatadog">putDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJenkins">putJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJob">putJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putNewRelic">putNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putPrometheus">putPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb">putWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetCloudWatch">resetCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetDatadog">resetDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetJenkins">resetJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetJob">resetJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetNewRelic">resetNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetPrometheus">resetPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetWeb">resetWeb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudWatch` <a name="putCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putCloudWatch"></a>

```typescript
public putCloudWatch(value: OceancdVerificationTemplateMetricsProviderCloudWatch): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putCloudWatch.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a>

---

##### `putDatadog` <a name="putDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putDatadog"></a>

```typescript
public putDatadog(value: OceancdVerificationTemplateMetricsProviderDatadog): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a>

---

##### `putJenkins` <a name="putJenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJenkins"></a>

```typescript
public putJenkins(value: OceancdVerificationTemplateMetricsProviderJenkins): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJenkins.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a>

---

##### `putJob` <a name="putJob" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJob"></a>

```typescript
public putJob(value: OceancdVerificationTemplateMetricsProviderJob): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putJob.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a>

---

##### `putNewRelic` <a name="putNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putNewRelic"></a>

```typescript
public putNewRelic(value: OceancdVerificationTemplateMetricsProviderNewRelic): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a>

---

##### `putPrometheus` <a name="putPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putPrometheus"></a>

```typescript
public putPrometheus(value: OceancdVerificationTemplateMetricsProviderPrometheus): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putPrometheus.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a>

---

##### `putWeb` <a name="putWeb" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb"></a>

```typescript
public putWeb(value: OceancdVerificationTemplateMetricsProviderWeb): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a>

---

##### `resetCloudWatch` <a name="resetCloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetCloudWatch"></a>

```typescript
public resetCloudWatch(): void
```

##### `resetDatadog` <a name="resetDatadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetDatadog"></a>

```typescript
public resetDatadog(): void
```

##### `resetJenkins` <a name="resetJenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetJenkins"></a>

```typescript
public resetJenkins(): void
```

##### `resetJob` <a name="resetJob" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetJob"></a>

```typescript
public resetJob(): void
```

##### `resetNewRelic` <a name="resetNewRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetNewRelic"></a>

```typescript
public resetNewRelic(): void
```

##### `resetPrometheus` <a name="resetPrometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetPrometheus"></a>

```typescript
public resetPrometheus(): void
```

##### `resetWeb` <a name="resetWeb" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.resetWeb"></a>

```typescript
public resetWeb(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.cloudWatch">cloudWatch</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.datadog">datadog</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference">OceancdVerificationTemplateMetricsProviderDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jenkins">jenkins</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference">OceancdVerificationTemplateMetricsProviderJenkinsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.job">job</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference">OceancdVerificationTemplateMetricsProviderJobOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.newRelic">newRelic</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference">OceancdVerificationTemplateMetricsProviderNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.prometheus">prometheus</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference">OceancdVerificationTemplateMetricsProviderPrometheusOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.web">web</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference">OceancdVerificationTemplateMetricsProviderWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.cloudWatchInput">cloudWatchInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.datadogInput">datadogInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jenkinsInput">jenkinsInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jobInput">jobInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.newRelicInput">newRelicInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.prometheusInput">prometheusInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.webInput">webInput</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudWatch`<sup>Required</sup> <a name="cloudWatch" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.cloudWatch"></a>

```typescript
public readonly cloudWatch: OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference">OceancdVerificationTemplateMetricsProviderCloudWatchOutputReference</a>

---

##### `datadog`<sup>Required</sup> <a name="datadog" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.datadog"></a>

```typescript
public readonly datadog: OceancdVerificationTemplateMetricsProviderDatadogOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadogOutputReference">OceancdVerificationTemplateMetricsProviderDatadogOutputReference</a>

---

##### `jenkins`<sup>Required</sup> <a name="jenkins" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jenkins"></a>

```typescript
public readonly jenkins: OceancdVerificationTemplateMetricsProviderJenkinsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkinsOutputReference">OceancdVerificationTemplateMetricsProviderJenkinsOutputReference</a>

---

##### `job`<sup>Required</sup> <a name="job" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.job"></a>

```typescript
public readonly job: OceancdVerificationTemplateMetricsProviderJobOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJobOutputReference">OceancdVerificationTemplateMetricsProviderJobOutputReference</a>

---

##### `newRelic`<sup>Required</sup> <a name="newRelic" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.newRelic"></a>

```typescript
public readonly newRelic: OceancdVerificationTemplateMetricsProviderNewRelicOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelicOutputReference">OceancdVerificationTemplateMetricsProviderNewRelicOutputReference</a>

---

##### `prometheus`<sup>Required</sup> <a name="prometheus" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.prometheus"></a>

```typescript
public readonly prometheus: OceancdVerificationTemplateMetricsProviderPrometheusOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference">OceancdVerificationTemplateMetricsProviderPrometheusOutputReference</a>

---

##### `web`<sup>Required</sup> <a name="web" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.web"></a>

```typescript
public readonly web: OceancdVerificationTemplateMetricsProviderWebOutputReference;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference">OceancdVerificationTemplateMetricsProviderWebOutputReference</a>

---

##### `cloudWatchInput`<sup>Optional</sup> <a name="cloudWatchInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.cloudWatchInput"></a>

```typescript
public readonly cloudWatchInput: OceancdVerificationTemplateMetricsProviderCloudWatch;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderCloudWatch">OceancdVerificationTemplateMetricsProviderCloudWatch</a>

---

##### `datadogInput`<sup>Optional</sup> <a name="datadogInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.datadogInput"></a>

```typescript
public readonly datadogInput: OceancdVerificationTemplateMetricsProviderDatadog;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderDatadog">OceancdVerificationTemplateMetricsProviderDatadog</a>

---

##### `jenkinsInput`<sup>Optional</sup> <a name="jenkinsInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jenkinsInput"></a>

```typescript
public readonly jenkinsInput: OceancdVerificationTemplateMetricsProviderJenkins;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJenkins">OceancdVerificationTemplateMetricsProviderJenkins</a>

---

##### `jobInput`<sup>Optional</sup> <a name="jobInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.jobInput"></a>

```typescript
public readonly jobInput: OceancdVerificationTemplateMetricsProviderJob;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderJob">OceancdVerificationTemplateMetricsProviderJob</a>

---

##### `newRelicInput`<sup>Optional</sup> <a name="newRelicInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.newRelicInput"></a>

```typescript
public readonly newRelicInput: OceancdVerificationTemplateMetricsProviderNewRelic;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderNewRelic">OceancdVerificationTemplateMetricsProviderNewRelic</a>

---

##### `prometheusInput`<sup>Optional</sup> <a name="prometheusInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.prometheusInput"></a>

```typescript
public readonly prometheusInput: OceancdVerificationTemplateMetricsProviderPrometheus;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a>

---

##### `webInput`<sup>Optional</sup> <a name="webInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.webInput"></a>

```typescript
public readonly webInput: OceancdVerificationTemplateMetricsProviderWeb;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProvider;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProvider">OceancdVerificationTemplateMetricsProvider</a>

---


### OceancdVerificationTemplateMetricsProviderPrometheusOutputReference <a name="OceancdVerificationTemplateMetricsProviderPrometheusOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.prometheusQueryInput">prometheusQueryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.prometheusQuery">prometheusQuery</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `prometheusQueryInput`<sup>Optional</sup> <a name="prometheusQueryInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.prometheusQueryInput"></a>

```typescript
public readonly prometheusQueryInput: string;
```

- *Type:* string

---

##### `prometheusQuery`<sup>Required</sup> <a name="prometheusQuery" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.prometheusQuery"></a>

```typescript
public readonly prometheusQuery: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsProviderPrometheus;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderPrometheus">OceancdVerificationTemplateMetricsProviderPrometheus</a>

---


### OceancdVerificationTemplateMetricsProviderWebOutputReference <a name="OceancdVerificationTemplateMetricsProviderWebOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.putWebHeader">putWebHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetBody">resetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetInsecure">resetInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetJsonPath">resetJsonPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetMethod">resetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetTimeoutSeconds">resetTimeoutSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetWebHeader">resetWebHeader</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putWebHeader` <a name="putWebHeader" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.putWebHeader"></a>

```typescript
public putWebHeader(value: IResolvable | OceancdVerificationTemplateMetricsProviderWebWebHeader[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.putWebHeader.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>[]

---

##### `resetBody` <a name="resetBody" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetBody"></a>

```typescript
public resetBody(): void
```

##### `resetInsecure` <a name="resetInsecure" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetInsecure"></a>

```typescript
public resetInsecure(): void
```

##### `resetJsonPath` <a name="resetJsonPath" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetJsonPath"></a>

```typescript
public resetJsonPath(): void
```

##### `resetMethod` <a name="resetMethod" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetMethod"></a>

```typescript
public resetMethod(): void
```

##### `resetTimeoutSeconds` <a name="resetTimeoutSeconds" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetTimeoutSeconds"></a>

```typescript
public resetTimeoutSeconds(): void
```

##### `resetWebHeader` <a name="resetWebHeader" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.resetWebHeader"></a>

```typescript
public resetWebHeader(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.webHeader">webHeader</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList">OceancdVerificationTemplateMetricsProviderWebWebHeaderList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.bodyInput">bodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.insecureInput">insecureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.jsonPathInput">jsonPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.methodInput">methodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.timeoutSecondsInput">timeoutSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.webHeaderInput">webHeaderInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.body">body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.insecure">insecure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.jsonPath">jsonPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.method">method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.timeoutSeconds">timeoutSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `webHeader`<sup>Required</sup> <a name="webHeader" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.webHeader"></a>

```typescript
public readonly webHeader: OceancdVerificationTemplateMetricsProviderWebWebHeaderList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList">OceancdVerificationTemplateMetricsProviderWebWebHeaderList</a>

---

##### `bodyInput`<sup>Optional</sup> <a name="bodyInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.bodyInput"></a>

```typescript
public readonly bodyInput: string;
```

- *Type:* string

---

##### `insecureInput`<sup>Optional</sup> <a name="insecureInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.insecureInput"></a>

```typescript
public readonly insecureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jsonPathInput`<sup>Optional</sup> <a name="jsonPathInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.jsonPathInput"></a>

```typescript
public readonly jsonPathInput: string;
```

- *Type:* string

---

##### `methodInput`<sup>Optional</sup> <a name="methodInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.methodInput"></a>

```typescript
public readonly methodInput: string;
```

- *Type:* string

---

##### `timeoutSecondsInput`<sup>Optional</sup> <a name="timeoutSecondsInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.timeoutSecondsInput"></a>

```typescript
public readonly timeoutSecondsInput: number;
```

- *Type:* number

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `webHeaderInput`<sup>Optional</sup> <a name="webHeaderInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.webHeaderInput"></a>

```typescript
public readonly webHeaderInput: IResolvable | OceancdVerificationTemplateMetricsProviderWebWebHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>[]

---

##### `body`<sup>Required</sup> <a name="body" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.body"></a>

```typescript
public readonly body: string;
```

- *Type:* string

---

##### `insecure`<sup>Required</sup> <a name="insecure" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.insecure"></a>

```typescript
public readonly insecure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jsonPath`<sup>Required</sup> <a name="jsonPath" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.jsonPath"></a>

```typescript
public readonly jsonPath: string;
```

- *Type:* string

---

##### `method`<sup>Required</sup> <a name="method" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.method"></a>

```typescript
public readonly method: string;
```

- *Type:* string

---

##### `timeoutSeconds`<sup>Required</sup> <a name="timeoutSeconds" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.timeoutSeconds"></a>

```typescript
public readonly timeoutSeconds: number;
```

- *Type:* number

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OceancdVerificationTemplateMetricsProviderWeb;
```

- *Type:* <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWeb">OceancdVerificationTemplateMetricsProviderWeb</a>

---


### OceancdVerificationTemplateMetricsProviderWebWebHeaderList <a name="OceancdVerificationTemplateMetricsProviderWebWebHeaderList" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.get"></a>

```typescript
public get(index: number): OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderWebWebHeader[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>[]

---


### OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference <a name="OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer"></a>

```typescript
import { oceancdVerificationTemplate } from '@cdktf/provider-spotinst'

new oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderKeyInput">webHeaderKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderValueInput">webHeaderValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderKey">webHeaderKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderValue">webHeaderValue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `webHeaderKeyInput`<sup>Optional</sup> <a name="webHeaderKeyInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderKeyInput"></a>

```typescript
public readonly webHeaderKeyInput: string;
```

- *Type:* string

---

##### `webHeaderValueInput`<sup>Optional</sup> <a name="webHeaderValueInput" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderValueInput"></a>

```typescript
public readonly webHeaderValueInput: string;
```

- *Type:* string

---

##### `webHeaderKey`<sup>Required</sup> <a name="webHeaderKey" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderKey"></a>

```typescript
public readonly webHeaderKey: string;
```

- *Type:* string

---

##### `webHeaderValue`<sup>Required</sup> <a name="webHeaderValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.webHeaderValue"></a>

```typescript
public readonly webHeaderValue: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeaderOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OceancdVerificationTemplateMetricsProviderWebWebHeader;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.oceancdVerificationTemplate.OceancdVerificationTemplateMetricsProviderWebWebHeader">OceancdVerificationTemplateMetricsProviderWebWebHeader</a>

---



