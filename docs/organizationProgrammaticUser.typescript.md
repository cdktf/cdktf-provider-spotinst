# `organizationProgrammaticUser` Submodule <a name="`organizationProgrammaticUser` Submodule" id="@cdktf/provider-spotinst.organizationProgrammaticUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OrganizationProgrammaticUser <a name="OrganizationProgrammaticUser" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser"></a>

Represents a {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user spotinst_organization_programmatic_user}.

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer"></a>

```typescript
import { organizationProgrammaticUser } from '@cdktf/provider-spotinst'

new organizationProgrammaticUser.OrganizationProgrammaticUser(scope: Construct, id: string, config: OrganizationProgrammaticUserConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig">OrganizationProgrammaticUserConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig">OrganizationProgrammaticUserConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putAccounts">putAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putPolicies">putPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetAccounts">resetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetUserGroupIds">resetUserGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAccounts` <a name="putAccounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putAccounts"></a>

```typescript
public putAccounts(value: IResolvable | OrganizationProgrammaticUserAccounts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putAccounts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>[]

---

##### `putPolicies` <a name="putPolicies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putPolicies"></a>

```typescript
public putPolicies(value: IResolvable | OrganizationProgrammaticUserPolicies[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.putPolicies.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>[]

---

##### `resetAccounts` <a name="resetAccounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetAccounts"></a>

```typescript
public resetAccounts(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetPolicies"></a>

```typescript
public resetPolicies(): void
```

##### `resetUserGroupIds` <a name="resetUserGroupIds" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.resetUserGroupIds"></a>

```typescript
public resetUserGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a OrganizationProgrammaticUser resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isConstruct"></a>

```typescript
import { organizationProgrammaticUser } from '@cdktf/provider-spotinst'

organizationProgrammaticUser.OrganizationProgrammaticUser.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformElement"></a>

```typescript
import { organizationProgrammaticUser } from '@cdktf/provider-spotinst'

organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformResource"></a>

```typescript
import { organizationProgrammaticUser } from '@cdktf/provider-spotinst'

organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.generateConfigForImport"></a>

```typescript
import { organizationProgrammaticUser } from '@cdktf/provider-spotinst'

organizationProgrammaticUser.OrganizationProgrammaticUser.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a OrganizationProgrammaticUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the OrganizationProgrammaticUser to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing OrganizationProgrammaticUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the OrganizationProgrammaticUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.accounts">accounts</a></code> | <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList">OrganizationProgrammaticUserAccountsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.policies">policies</a></code> | <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList">OrganizationProgrammaticUserPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.accountsInput">accountsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.policiesInput">policiesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.userGroupIdsInput">userGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.userGroupIds">userGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.accounts"></a>

```typescript
public readonly accounts: OrganizationProgrammaticUserAccountsList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList">OrganizationProgrammaticUserAccountsList</a>

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.policies"></a>

```typescript
public readonly policies: OrganizationProgrammaticUserPoliciesList;
```

- *Type:* <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList">OrganizationProgrammaticUserPoliciesList</a>

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.accountsInput"></a>

```typescript
public readonly accountsInput: IResolvable | OrganizationProgrammaticUserAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>[]

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.policiesInput"></a>

```typescript
public readonly policiesInput: IResolvable | OrganizationProgrammaticUserPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>[]

---

##### `userGroupIdsInput`<sup>Optional</sup> <a name="userGroupIdsInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.userGroupIdsInput"></a>

```typescript
public readonly userGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `userGroupIds`<sup>Required</sup> <a name="userGroupIds" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.userGroupIds"></a>

```typescript
public readonly userGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUser.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OrganizationProgrammaticUserAccounts <a name="OrganizationProgrammaticUserAccounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.Initializer"></a>

```typescript
import { organizationProgrammaticUser } from '@cdktf/provider-spotinst'

const organizationProgrammaticUserAccounts: organizationProgrammaticUser.OrganizationProgrammaticUserAccounts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#account_id OrganizationProgrammaticUser#account_id}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.property.accountRole">accountRole</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#account_role OrganizationProgrammaticUser#account_role}. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#account_id OrganizationProgrammaticUser#account_id}.

---

##### `accountRole`<sup>Required</sup> <a name="accountRole" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts.property.accountRole"></a>

```typescript
public readonly accountRole: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#account_role OrganizationProgrammaticUser#account_role}.

---

### OrganizationProgrammaticUserConfig <a name="OrganizationProgrammaticUserConfig" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.Initializer"></a>

```typescript
import { organizationProgrammaticUser } from '@cdktf/provider-spotinst'

const organizationProgrammaticUserConfig: organizationProgrammaticUser.OrganizationProgrammaticUserConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#name OrganizationProgrammaticUser#name}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.accounts">accounts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>[]</code> | accounts block. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#description OrganizationProgrammaticUser#description}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#id OrganizationProgrammaticUser#id}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.policies">policies</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>[]</code> | policies block. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.userGroupIds">userGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#user_group_ids OrganizationProgrammaticUser#user_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#name OrganizationProgrammaticUser#name}.

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.accounts"></a>

```typescript
public readonly accounts: IResolvable | OrganizationProgrammaticUserAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>[]

accounts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#accounts OrganizationProgrammaticUser#accounts}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#description OrganizationProgrammaticUser#description}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#id OrganizationProgrammaticUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.policies"></a>

```typescript
public readonly policies: IResolvable | OrganizationProgrammaticUserPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>[]

policies block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#policies OrganizationProgrammaticUser#policies}

---

##### `userGroupIds`<sup>Optional</sup> <a name="userGroupIds" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserConfig.property.userGroupIds"></a>

```typescript
public readonly userGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#user_group_ids OrganizationProgrammaticUser#user_group_ids}.

---

### OrganizationProgrammaticUserPolicies <a name="OrganizationProgrammaticUserPolicies" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.Initializer"></a>

```typescript
import { organizationProgrammaticUser } from '@cdktf/provider-spotinst'

const organizationProgrammaticUserPolicies: organizationProgrammaticUser.OrganizationProgrammaticUserPolicies = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.property.policyAccountIds">policyAccountIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#policy_account_ids OrganizationProgrammaticUser#policy_account_ids}. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.property.policyId">policyId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#policy_id OrganizationProgrammaticUser#policy_id}. |

---

##### `policyAccountIds`<sup>Required</sup> <a name="policyAccountIds" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.property.policyAccountIds"></a>

```typescript
public readonly policyAccountIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#policy_account_ids OrganizationProgrammaticUser#policy_account_ids}.

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spotinst/spotinst/1.166.0/docs/resources/organization_programmatic_user#policy_id OrganizationProgrammaticUser#policy_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### OrganizationProgrammaticUserAccountsList <a name="OrganizationProgrammaticUserAccountsList" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer"></a>

```typescript
import { organizationProgrammaticUser } from '@cdktf/provider-spotinst'

new organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.get"></a>

```typescript
public get(index: number): OrganizationProgrammaticUserAccountsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationProgrammaticUserAccounts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>[]

---


### OrganizationProgrammaticUserAccountsOutputReference <a name="OrganizationProgrammaticUserAccountsOutputReference" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer"></a>

```typescript
import { organizationProgrammaticUser } from '@cdktf/provider-spotinst'

new organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountRoleInput">accountRoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountRole">accountRole</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `accountRoleInput`<sup>Optional</sup> <a name="accountRoleInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountRoleInput"></a>

```typescript
public readonly accountRoleInput: string;
```

- *Type:* string

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `accountRole`<sup>Required</sup> <a name="accountRole" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.accountRole"></a>

```typescript
public readonly accountRole: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccountsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationProgrammaticUserAccounts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserAccounts">OrganizationProgrammaticUserAccounts</a>

---


### OrganizationProgrammaticUserPoliciesList <a name="OrganizationProgrammaticUserPoliciesList" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer"></a>

```typescript
import { organizationProgrammaticUser } from '@cdktf/provider-spotinst'

new organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.get"></a>

```typescript
public get(index: number): OrganizationProgrammaticUserPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationProgrammaticUserPolicies[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>[]

---


### OrganizationProgrammaticUserPoliciesOutputReference <a name="OrganizationProgrammaticUserPoliciesOutputReference" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer"></a>

```typescript
import { organizationProgrammaticUser } from '@cdktf/provider-spotinst'

new organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyAccountIdsInput">policyAccountIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyIdInput">policyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyAccountIds">policyAccountIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyId">policyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `policyAccountIdsInput`<sup>Optional</sup> <a name="policyAccountIdsInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyAccountIdsInput"></a>

```typescript
public readonly policyAccountIdsInput: string[];
```

- *Type:* string[]

---

##### `policyIdInput`<sup>Optional</sup> <a name="policyIdInput" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyIdInput"></a>

```typescript
public readonly policyIdInput: string;
```

- *Type:* string

---

##### `policyAccountIds`<sup>Required</sup> <a name="policyAccountIds" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyAccountIds"></a>

```typescript
public readonly policyAccountIds: string[];
```

- *Type:* string[]

---

##### `policyId`<sup>Required</sup> <a name="policyId" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.policyId"></a>

```typescript
public readonly policyId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OrganizationProgrammaticUserPolicies;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-spotinst.organizationProgrammaticUser.OrganizationProgrammaticUserPolicies">OrganizationProgrammaticUserPolicies</a>

---



